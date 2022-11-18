import React from 'react';
const ContactUs=()=>{
    return(
        <>
        <div className="container mt-5">
            <div className="row">
            <div className="col-md-4 mt-5">
                <h4>Location:</h4>
                <p>indore,madhya pradesh,India</p>
                <h4>Contact:</h4>
                <p>9926923111</p>
                <h4>Email:</h4>
                <p>programmerhub@gmail.com</p>
            </div>
            <div className="col-md-8">
            <input type="text" className='form-control mt-5' placeholder='Enter your name'/>    
            <input type="number" className='form-control mt-3' placeholder='Enter your contact'/>
            <input type="email" className='form-control mt-3' placeholder='Enter your email'/>
            <textarea class="form-control mt-3"  rows="3"></textarea>
            <button className='btn btn-primary mt-3'>Submit</button>
            </div>
            </div>
        </div>
        </>
    )
}
export default ContactUs;