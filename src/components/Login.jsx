import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    let navigate=useNavigate();
    const [uid,setUid]=useState("");
    const [pwd,setPwd]=useState("");
    function submitForm(e){
        e.preventDefault();
        if(uid==="admin"&&pwd==='1234')
        {
            navigate('/login/Api2')
            alert("Login Succesfully");            
        }
        else
        {
            alert("Enter valid user id and password");
        }
    }
     return(   
        <>
        <div className="container mt-5">
            <div className="row">
                <form onSubmit={submitForm}>
                    <h1 className='text-center'>Login Admin</h1>
                    <input type="text" id='uid' className='form-control mt-2' placeholder='Enter your username' name='uid' onChange={(e)=>setUid(e.target.value)}/>
                    <input type="password" id='pwd' className='form-control mt-2' placeholder='Enter your password' name='pwd' onChange={(e)=>setPwd(e.target.value)}/>
                    <button type='submit' className='btn btn-primary mt-2'>Login</button>
                </form>
            </div>
        </div>
        </>
    )
}
export default Login;