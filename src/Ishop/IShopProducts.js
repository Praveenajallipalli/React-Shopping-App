import { useParams, Link } from "react-router-dom";
import { useState, useEffect, use } from "react";
import axios from 'axios';

export default function IShopProducts(){
    const [category, setCategory] = useState();
    const [products, setProducts] = useState([]);
    let params = useParams();
    useEffect(()=>{
        setCategory(params.category);
        axios.get("http://localhost:4000/getproducts")
        .then(response => {
            setProducts(response.data);
        })
    })
    return(
        <div>
            <h2>{category} List</h2>
            <ol>
                {
                    products.filter(item => item.category == category).map(product => {
                        return <li key={product.id}>
                            <img src={product.image} wwidth="50" height="50" />
                            <div><Link to={"/details/"+product.id}>{product.title}</Link></div>
                        </li> 
                    })
                }
            </ol>
            <div>
                <Link to="/dashboard">Back tp categories</Link>
                
            </div>
        </div>
    )
}