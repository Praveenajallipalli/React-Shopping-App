import { useEffect, useReducer, useState } from "react";

// var initialState = {count:0};
var initialState = {likes:0, dislikes:0};

function reducer(state, action){
    switch(action.type){
        case 'Like':
            // return {count: state.count+1};
            return {likes: state.likes+1, dislikes:state.dislikes};
        case 'Dislike':
            // return {count: state.count-1};
            return {dislikes: state.dislikes+1, likes:state.likes};
    }
}

export default function ReducerDemo(){
    const [state, dispatch] = useReducer(reducer, initialState);
    const [product, setProduct] = useState({});

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/2")
        .then(response => response.json())
        .then(data => {
            setProduct(data);
        })
    })

    return(
        <div className="container-fluid">
            {/* <h2>Likes Counter - {state.count}</h2>
            <button onClick={()=>{dispatch({type:'Like'})}}>Like</button>
            <button onClick={()=>{dispatch({type:'Dislike'})}}>Dislike</button> */}
            <h2>Product Details</h2>
            
            <div className="p-2 card" style={{width:'200px'}}>
                <img src={product.image} className="card-img-top" height="160px"/>
                <div className="card-header">
                    <p>{product.title}</p>
                </div>
                <div className="card-footer">
                    [{state.likes}]<button className="btn btn-primary" onClick={()=>{dispatch({type:'Like'})}}><span className="bi bi-hand-thumbs-up"></span></button>
                    [{state.dislikes}]<button className="btn btn-danger" onClick={()=>{dispatch({type:'Dislike'})}}><span className="bi bi-hand-thumbs-down"></span></button>
                </div>
            </div>
        </div>
    )
}