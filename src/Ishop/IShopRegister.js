import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import  axios  from 'axios';
import { useState, useEffect } from 'react';

export default function IShopRegister(){
    let navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [userError, setUserError] = useState('');

    const formik = useFormik({
        initialValues: {
            UserId: '',
            UserName: '',
            Password: '',
            Age: 0,
            Mobile: '',
            Subscribed: false
        },
        onSubmit: values => {
            // alert(JSON.stringify(values));
            axios.post("http://localhost:4000/registeruser",values);
            alert("Registered Successfully");
            navigate('/login');
        }
    })

    useEffect(()=>{
        axios.get("http://localhost:4000/getusers")
        .then(response => {
            setUsers(response.data);
        })
        .catch(function(err){
            console.log(err);
        })
    },[])

    function VerifyUserId(e){
        for(var user of users){
            if(user.UserId==e.target.value){
                setUserError('User Id Taken - Try Another');
                break;
            }else{
                setUserError('User Id Available')
            }
        }
    }

    function HandleButtonClick(){
        navigate("/login");
    }

    return(
        <div>
            <h2>User Register</h2>
            <button onClick={HandleButtonClick}>Go to Login</button>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>UserId</dt>
                    <dd><input type="text" onKeyUp={VerifyUserId} value={formik.values.UserId} onChange={formik.handleChange} name="UserId"/></dd>
                    <dd>{userError}</dd>
                    <dt>UserName</dt>
                    <dd><input type="text" value={formik.values.UserName} onChange={formik.handleChange} name="UserName"/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" value={formik.values.Password} onChange={formik.handleChange} name="Password"/></dd>
                    <dt>Age</dt>
                    <dd><input type="text" value={formik.values.Age} onChange={formik.handleChange} name="Age"/></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" value={formik.values.Mobile} onChange={formik.handleChange} name="Mobile"/></dd>
                    <dt>Subscription</dt>
                    <dd className="form-switch"><input type="checkbox" className="form-check-input" checked={formik.values.Subscribed} onChange={formik.handleChange} name="Subscribed"/>Yes</dd>
                    <Link to="/login">Already have account?</Link>
                </dl>
                <button className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}