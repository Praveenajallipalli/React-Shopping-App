
import { useState, useEffect } from "react";
import $ from 'jquery';
import { useFormik } from "formik";

export default function JQueryAjaxDemo(){
    const [users, setUsers] = useState([]);
    const [userError, setUserError] = useState('');

    const formik = useFormik({
        initialValues : {
            UserId: '',
            UserName: '',
            Password: '',
            Age: 0,
            Mobile: '',
            Subscribed: false
        },
        onSubmit: values => {
            // alert(JSON.stringify(values));
            $.ajax({
                method: "POST",
                url: "http://localhost:4000/registeruser",
                data: values
            })
            alert("Registered Successfully");
        }
    })

    useEffect(()=>{
        $.ajax({
            method: "GET",
            url: "http://localhost:4000/getusers",
            success: function(response){
                setUsers(response);
            }
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

    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            {/* <ol>
                {
                    users.map(user => {
                        return <li key={user.Id}>{user.UserId}</li>
                    })
                }
            </ol> */}

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
                </dl>
                <button className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}  