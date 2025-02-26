import axios from "axios";
import { useState, useEffect } from "react";


export default function AxiosDemo(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:4000/getusers")
        .then((response)=>{
            setUsers(response.data)
        })
        .catch(function(err){
            console.log(err);
        })
    })

    return(
        <div className="container-fluid">
            <h2>Users</h2>
            <ol>
                {
                    users.map(user=>{
                        return <li key={user.UserId}>{user.UserId}</li>
                    })
                }
            </ol>
        </div>
    )
}