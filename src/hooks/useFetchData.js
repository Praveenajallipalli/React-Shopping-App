import { useState, useEffect } from "react";

export function useFetchData(url)
{
    const [Data, setData] = useState({});

    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            setData(data);
        })
        .catch((exception) => {
            console.log(exception);
        }) 
    },[url])
    
    return Data; 
}
