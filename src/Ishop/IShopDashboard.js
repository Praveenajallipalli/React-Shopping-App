import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function IShopDashboard(){
    let navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies();
    const [userid, setUserId] = useState();

    useEffect(()=>{
        if(cookies["userid"]==undefined){
            navigate("/login");
        }
        else{
            setUserId(cookies["userid"]);
        }
    })

    function HandleSignOut(){
        removeCookie("userid");
        navigate("/login");
    }
    
    return(
        <div>
            <h2>User Dashboard {userid} - <button onClick={HandleSignOut} className="btn btn-link">Sign Out</button></h2>
        </div>
    )
}