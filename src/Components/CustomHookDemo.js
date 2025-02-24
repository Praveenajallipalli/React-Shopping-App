import { useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { useSort } from "../hooks/useSort";

export default function CustomHookDemo()
{
    const data = useFetchData("https://fakestoreapi.com/products");
    const list = useSort("D","B","E","A","C");
    
    function handleData(){
        console.log(data);
        console.log(list);
        data.map(product => {
            console.log(product.title);
        })
        list.map(item => {
            console.log(item);
        })
    }

    return(
        <div className="container-fluid">
            <h2>Products</h2>
            <ol>
                {
                    list.map((item,index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ol>
            <ol>
                {
                    data.map((product)=>{
                        return <li key={product.id}>{product.title}</li>
                    })
                }
            </ol>
            <button onClick={handleData}>Click</button>
        </div>
    )
}
