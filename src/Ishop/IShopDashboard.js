import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
// import { response } from "express";

export default function IShopDashboard(){
    let navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies();
    const [userid, setUserId] = useState();
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        if(cookies["userid"]==undefined){
            navigate("/login");
        }
        else{
            setUserId(cookies["userid"]);
            LoadCategories();
        }
    })

    function HandleSignOut(){
        removeCookie("userid");
        navigate("/login");
    }

    function LoadCategories(){
        axios.get("http://localhost:4000/getcategories")
        .then(response => {
            setCategories(response.data);
        })
    }
    
    return(
        <div>
            <h2>User Dashboard {userid} - <button onClick={HandleSignOut} className="btn btn-link">Sign Out</button></h2>
            <h3>Product Categories</h3>
            <ol>
                {
                    categories.map(item => {
                        return <li key={item.category}><Link to={"/products/"+item.category}>{item.category.toUpperCase()}</Link></li>
                    })
                }
            </ol>
        </div>
    )
}
