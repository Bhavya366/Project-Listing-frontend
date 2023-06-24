import { React, useState } from 'react';
import './Productcard.css'
import comment from '../../Images/comment.png'
import sortbycomments from '../../Images/sortbycomments.png'
import commentsend from '../../Images/commentsend.png'
import axios from 'axios';
import ProductForm from './ProductForm';
import FeedbackProduct from '../FeedbackProduct';
import baseUrl from '../../constants/base';
import { useContext } from 'react'
import { MyContext } from '../../MyContext'

const ProductCard = ({ product }) => {
    const { text, loggedIn, setText, setLoggedIn, edit, setEdit } = useContext(MyContext)
    const [upvotes, setUpvotes] = useState(product.upvote);
    const [comments, setComments] = useState(product.comments);
    

    const [show, setShow] = useState(false);
    const addComment = () => {
        setShow(true)
    }
    const storeComment = (event, nameofthecompany) => {
        event.preventDefault();
        const data = {
            nameofthecompany: nameofthecompany,
            comment: event.target[0].value,
        }
        if(event.target[0].value!=""){
        axios.put(`${baseUrl}/comment`, data)
            .then((res) => { setComments(res.data.comments) })
            .catch((err) => { console.log(err) })
        }
    }

    return (
        <div className="product-card selected-card">
            <div className='product-details'>
                <div className="card-left">
                    <div className="product-img">
                        <img alt="" src={product.addlogourl} />
                    </div>
                    <div className="product-des">
                        <div className="product-title">
                            <h3>{product.nameofthecompany}</h3>
                        </div>
                        <div className="product-decription">
                            <p>{product.adddescription}</p>
                        </div>
                        <div className='comment-section'>
                            <div className='filtered-categories'>
                                {product.category.map((eachCategory, index) => {
                                    return (<span key={index} className='product-card-category'>{eachCategory}</span>)
                                })} &nbsp;&nbsp;
                                
                                <div className='comment-btn-section' onClick={() => addComment()}>
                                    <img src={comment} alt="" />&nbsp;
                                    <p className='comment-btn' >Comment</p>
                                </div> 
                            </div>
                            {loggedIn ? <button className='edit-btn' onClick={() => { setEdit(product._id) }}>Edit</button> : ""}                          
                        </div>
                    </div>
                </div>
                <div className="card-right">
                    <div className='upvote-count'>
                        <button onClick={() => {
                            setUpvotes(upvotes => upvotes + 1)
                            axios.put(`${baseUrl}/upvote`, {
                                nameofthecompany: product.nameofthecompany,
                                upvote: upvotes,
                            }).then((res) => { product.upvote = res.data.upvote })
                        }}>^<br></br>{product.upvote}</button>
                    </div>
                    <div className='comments-count'>
                        <div className='comments'><span>{product.comments.length}</span>&nbsp;<img src={sortbycomments} alt="" /></div>
                    </div>
                </div>
            </div><br></br>
            {show ?
                <div className='input-box-with-img'>
                    <form onSubmit={(event) => { storeComment(event, product.nameofthecompany) }}>
                        <div className='input_box'>
                            <input type="text" placeholder='Add a comment....' />
                            <button type='submit' className='commentsend-btn'><img src={commentsend} /></button>
                        </div>
                    </form>
                </div>
                : ""}<br></br>
            {show && product.comments ? <div>
                {product.comments?
                    <div className='scrollable-div'>{comments.map((eachComment, index) => {
                        return (
                            <div className='each-comment-scrollable' key={index}>
                                <span className='dot'></span>
                                <p>{eachComment}</p>
                            </div>
                        )
                    })}<br></br>
                    </div> : ""}</div> : ""}

            {edit!=0 ? 
            <div className='pop-up-background'>
                <div className='pop-up' >
                    <div className='form-fr-add-product'>
                        <ProductForm id={edit} />
                    </div>
                    <div className='feedback-form'>
                        <FeedbackProduct />
                    </div>
                </div>
            </div> : ""}
        </div>
    );
};

export default ProductCard;