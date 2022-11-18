import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
const Api2 = () => {
    var [pid,updatePid]=useState();
    var [data, updateData] = useState([]);
    var [pro,updatePro] = useState({id:'',roll:0,first_name:'',last_name:'',branch:'',year:'',username:'',password:'',email:''})

    useEffect(
        function() {
            async function getData() {
                var res = await axios.get('https://restp.herokuapp.com/student/')
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
                        var res=await axios.post("https://restp.herokuapp.com/student/",{
                            roll:pro.roll,
                            first_name:pro.first_name,
                            last_name:pro.last_name,
                            year:pro.year,
                            username:pro.username,
                            password:pro.password,
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
                updatePro({id:'',roll:'',first_name:'',last_name:'',branch:'',year:'',username:'',password:'',email:''})
            }}>
                Roll No <input type="text" name="roll" className='form-control' value={pro.roll} onChange={prochange}/>
                First Name <input type="text" name="first_name" className='form-control' value={pro.first_name} onChange={prochange}/>
                Last Name <input type="text" name="last_name" className='form-control' value={pro.last_name} onChange={prochange}/>
                Branch <input type="text" name="branch" className='form-control' value={pro.branch} onChange={prochange}/>
                Year <input type="text" name="year" className='form-control' value={pro.year} onChange={prochange}/>
                Username <input type="text" name="username" className='form-control' value={pro.username} onChange={prochange}/>
                Password <input type="text" name="password" className='form-control' value={pro.password} onChange={prochange}/>
                Email <input type="text" name="email" className='form-control' value={pro.email} onChange={prochange}/>
                <button name="" className='btn btn-dark'>Add Student</button>
                <button name="" className='btn btn-light'>Update Data</button>
            </form>
            <input type="number" className='form-control' name='pid' value={pid} onChange={changeval}/>
            <button className='btn btn-danger' onClick={()=>{
                async function search()
                {
                    var res=await axios.get(`https://restp.herokuapp.com/student/${pid}/`);
                    updateData([res.data]);
                }
                search();
            }}>Search</button>
            </div>
            <div className="container-fluid">
                
            <table className='table table-borderd tabel-center'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Roll no.</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Branch</th>
                                <th>Year</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
            {data.map((v) => {
                return (
                        <tr key={v.id}>
                            <td>{v.id}</td>
                            <td>{v.roll}</td>
                            <td>{v.first_name}</td>
                            <td>{v.last_name}</td>
                            <td>{v.branch}</td>
                            <td>{v.year}</td>
                            <td>{v.username}</td>
                            <td>{v.password}</td>
                            <td>{v.email}</td>
                            <td><button className='btn btn-success mr-5 float-end' onClick={()=>{
                                    updatePro(v);
                                }}>Update</button></td>
                                <td><button className='btn btn-danger float-end' onClick={()=>{
                                    async function delPro(){
                                        var res = await axios.delete(`https://restp.herokuapp.com/student/${v.id}/`) 
                                        if(res.status===204)
                                        {
                                            alert('Remove student sucessfully')
                                        }
                                    }
                                    delPro();
                                }}>Remove</button></td>
                            </tr>                    
                )
            })}
            </tbody>
            </table>
            </div>
        </>
    )
}
export default Api2;



