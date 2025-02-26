import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useCaptcha } from "../hooks/useCaptcha";
import $ from 'jquery';


export default function UserLogin(){
    const [cookies, setCookies, removeCookies] = useCookies(['username']);
    const [userDetails, setUserDetails] =  useState({UserName:'', Password:''});
    const code = useCaptcha();
    const [users, setUsers] = useState([]);

    function  handleUserName(e){
        setUserDetails({
            UserName: e.target.value,
            Password: userDetails.Password
        })
    }

    function  handlePassword(e){
        setUserDetails({
            UserName: userDetails.UserName,
            Password: e.target.value
        })
    }

    function  handleLogin(){
        for(var user of users){
            if(user.UserId==userDetails.UserName && user.Password==userDetails.Password){
                setCookies("username", userDetails.UserName, {path:'/', expires: new Date("2025-02-20 20:22")});
                alert("Login Success...");
                break;
            }else{
                alert("Invalid Login...");
            }
        }
    }

    function handleSignOut(){
        removeCookies("username");
        alert('Signed Out Successfully...');
    }

    useEffect(()=>{
        // if(cookies.username==undefined){
        //     alert("Please Login..");
        // }

        $.ajax({
            method: "GET",
            url: "http://localhost:4000/getusers",
            success: function(response){
                setUsers(response);
            }
        })
    })

    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>UserName</dt>
                <dd><input onChange={handleUserName} type="text" /></dd>
                <dt>Password</dt>
                <dd><input onChange={handlePassword} type="password" /></dd>
                <dt>Verify Code</dt>
                <dd>{code.code}</dd>
            </dl>
            <button onClick={handleLogin}>Login</button>
            <hr/>
            <h3>Home <button className="btn btn-link" onClick={handleSignOut}>Sign out</button></h3>
            Hello ! {cookies.username}
        </div>
    )
}
