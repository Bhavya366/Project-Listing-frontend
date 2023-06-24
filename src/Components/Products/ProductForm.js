import {React,useState,useEffect} from 'react';
import { useForm } from "react-hook-form"
import axios from 'axios';
import { MyContext } from '../../MyContext';
import { useContext } from 'react';
import baseUrl from '../../constants/base'

const ProductForm = ({ id }) => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { text,loggedIn,setText,setLoggedIn,edit,setEdit } = useContext(MyContext);
    
    const onSubmit = (data) => {
        data.upvote = 0
        const headers = {token : JSON.parse(localStorage.getItem('token'))}
        // if we want to edit since we are passing id while edit option in product card it will search id in backend
        if(edit){
            data.id = id;
            axios.put(`${baseUrl}/update-product`,data,{headers:headers})
            .then((res)=>{
                console.log(res);
                setText(false)  
                setEdit(false)          
            })
            .catch((err)=>{console.log(err)})
        }
        else{
            axios
          .post(`${baseUrl}/add-product`,data, {
            headers: headers
          })
          .then((res) => {
            setText(false)            
          })
          .catch((error) => {
            console.log(error);
          });
        }
      };
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='input'>
                    <input {...register("nameofthecompany")} type="text" placeholder='Name of the company' required />
                </div><br></br>
                <div className='input'>
                    <input {...register("category")} type="text" placeholder='Category' required />
                </div><br></br>
                <div className='input'>
                    <input {...register("addlogourl")} type="text" placeholder='Add logo url' required />
                </div><br></br>
                <div className='input'>
                    <input {...register("linkofproduct")} type="text" placeholder='Link of product' required  />
                </div><br></br>
                <div className='input'>
                    <input {...register("adddescription")} type="text" placeholder='Add description' required />
                </div><br></br>
               <button >+ Add</button>
            </form>
            
        </div>
    );
};

export default ProductForm;