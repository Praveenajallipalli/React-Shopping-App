import { useState, useEffect} from "react";
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

export default function IShopProductDetails(){
    const [product, setProduct] = useState([{"title":'',"price":'',"rating":{"rate":0,"count":0},"image":'',"category":'',"id":0,"description":''}]);
    let params = useParams();
    useEffect(()=>{
        let id = parseInt(params.id);
        axios.get(`http://localhost:4000/getproduct/${id}`)
        .then(response => {
            console.log(response.data);
            setProduct(response.data);
        })
        console.log(product);
    },[]) 
    return(
        <div>
            <h2>Product Details</h2>
            <dl>
                <dt>Title</dt>
                <dd>{product[0].title}</dd>
                <dt>Price</dt>
                <dd>{product[0].price}</dd>
                <dt>Preview</dt>
                <dd>
                    <img src={product[0].image} width="100" height="100" />
                </dd>
                <dt>Rating</dt>
                <dd>{product[0].rating.rate}</dd> 
            </dl>
            <br/>
            <Link to={"/products/"+product[0].category}>Back to Products</Link>
        </div>
    )
}