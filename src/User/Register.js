import React from 'react';
import Feedback from './Feedback';
import '../App.css'
import RegisterForm from './RegisterForm';


const Register = () => {

    return (
        <div className='login-register-page'>
            <div><Feedback/></div><br></br>
            <div className='login-page'>
                <RegisterForm />
            </div>
        </div>
    );
};

export default Register;