import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

export default function IShopLogin(){
    let navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies();
    const formik = useFormik({
        initialValues: {
            UserId:'',
            Password:''
        },
        onSubmit: values =>{
            for(var user of users){
                if(user.UserId==values.UserId && user.Password==values.Password){
                    setCookie("userid",user.UserId)
                    navigate("/dashboard");
                    break;
                }
                else{
                    navigate("/errorpage");
                }
            }
        }
    }) 

    useEffect(()=>{
        axios.get("http://localhost:4000/getusers")
        .then((response)=>{
            setUsers(response.data)
        })
        .catch(function(err){
            console.log(err);
        })
    },[])

    return(
        <div>
            <h2>User Login</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input name="UserId" value={formik.values.UserId} onChange={formik.handleChange} type="text" /></dd>
                    <dt>Password</dt>
                    <dd><input name='Password' value={formik.values.Password} onChange={formik.handleChange} type="password" /></dd>
                </dl>
                <button className="btn btn-primary">Login</button>
            </form>
            <br/>
            <Link to="/register">New User?</Link>
        </div>
    )
}