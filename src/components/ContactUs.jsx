import React from 'react';
const ContactUs=()=>{
    return(
        <>
        <div className="container">
            <div className="row">
            <div className="col-md-4">
                <img src="" alt="contact" />
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