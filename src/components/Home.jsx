import React from 'react';
import './css/nav.css'
import homeimg from './homeimage.png'
const Home=()=>{
    return(
        <div className="container px-4 px-lg-5 mt-5" id='hmdet'>
            <div className="row gx-4 gx-lg-5 align-items-center my-5">
                <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src={homeimg} alt="program" /></div>
                <div className="col-lg-5">
                    <h1 className="font-weight-light">We provide you best opportunity </h1>
                    <p>Information Technology (IT) continues to change the way we live, play and do business, so it should come as no surprise that IT is among the fastest growing sectors of the American workforce, and will continue to be for years to come.</p>
                </div>
            </div>
        </div>    
        
    )
}
export default Home;