import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
const Api1 = () => {
    var [pid,updatePid]=useState();
    var [data, updateData] = useState([]);
    var [pro,updatePro] = useState({id:'',first_name:'',last_name:'',branch:'',email:''})

    useEffect(
        function() {
            async function getData() {
                var res = await axios.get('https://restp.herokuapp.com/student/')
                console.log(res.data);
                console.log("hello");
                updateData(res.data);
            }
            getData();
        }
    );
    function changeval(e){
        updatePid(e.target.value)
    }
    const prochange=(e)=>{
        updatePro({...pro,[e.target.name]:e.target.value})
    }
    return (
        <>

            <h1 className='text-center text-primary pt-2'><i class="bi bi-person-circle"></i> Admin Portal</h1>
            <div className="container">
            <form onSubmit={(e)=>{
                e.preventDefault();
                if(pro.id==='')
                {
                    async function addpro()
                    {
                        var res=await axios.post('https://restp.herokuapp.com/student/',{
                            first_name:pro.first_name,
                            last_name:pro.last_name,
                            email:pro.email,
                            branch:pro.branch})
                            if(res.status===201)
                            {
                                alert('Student details add succesfully')
                            }
                    }
                    addpro();
                }
                else
                {
                    async function updatepro()
                    {
                        var res=await axios.put(`https://restp.herokuapp.com/student/${pro.id}/`,pro);
                        if(res.status===200)
                        {
                            alert('Student details updated succesfully')
                        }
                    }
                    updatepro();
                }
                updatePro({id:'',first_name:'',last_name:'',branch:'',email:''})
            }}>
                First Name <input type="text" name="first_name" className='form-control' value={pro.first_name} onChange={prochange}/>
                Last Name <input type="text" name="last_name" className='form-control' value={pro.last_name} onChange={prochange}/>
                Branch <input type="text" name="branch" className='form-control' value={pro.branch} onChange={prochange}/>
                Email <input type="text" name="email" className='form-control' value={pro.email} onChange={prochange}/>
                <button name="" className='btn btn-dark'>Add Product</button>
                <button name="" className='btn btn-light'>Update Product</button>
            </form>
            <input type="number" className='form-control' name='pid' value={pid} onChange={changeval}/>
            <button className='btn btn-danger' onClick={()=>{
                async function search()
                {
                    var res=await axios.get(`https://restp.herokuapp.com/student/${pid}/`);
                    updateData(res.data); 
                }
                search();
            }}>Search</button>
            </div>

            {data.map((v) => {
                return (
                    <>
                        <div class="card" style={{ float:"inline" }}>
                            <div class="card-header bg-primary text-white form-control-lg">
                                Name : {v.first_name} {v.last_name}
                                <button className='btn btn-success mr-5 float-end' onClick={()=>{
                                    updatePro(v);
                                }}>Update</button>
                                <button className='btn btn-danger float-end' onClick={()=>{
                                    async function delPro(){
                                        var res = await axios.delete(`https://restp.herokuapp.com/student/${v.id}`) 
                                        if(res.status===204)
                                        {
                                            alert('Remove student sucessfully')
                                        }
                                    }
                                    delPro();
                                }}>Delete</button>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li key={v.id} class="list-group-item">Branch : {v.branch}</li>
                                <li class="list-group-item">Email : {v.email}</li>
                                <li class="list-group-item">Id : {v.id}</li>
                            </ul>
                        </div>
                    </>
                )
            })}
        </>
    )
}
export default Api1;



