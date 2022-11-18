import React from 'react';
import { useParams } from 'react-router-dom';
const Services=()=>{
    let v=useParams();
    return(
    
        <h1> {v.val} services page</h1>
    )
}
export default Services;