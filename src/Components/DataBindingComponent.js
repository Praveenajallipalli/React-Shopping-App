import { useState, useEffect } from "react";

export default function DataBindingComponent(){
    // Data Binding For collections
    // var product = {
    //     Name : "Samsung TV",
    //     Price : 45005.45,
    //     Stock : true
    // }
    // var categories = ["All", "Electronics", "Footwear", "Fashion"];


    
    // For Table Presentig
    // var products =[
    //     {Name: "Samsung TV", Price: 56000.44},
    //     {Name: "Nike Casuals", Price:4200.44}
    // ];


    
    // For Nested Iterations
    // var menu = [
    //     {Category: "Electronics", Products: ["Samsung TV", "Mobile"]},
    //     {Category: "Footwear", Products: ["Nike Casuals", "Lee Boot"]}
    // ]



    // For Two way Binding
    // var username = "John";

    // const [products, setProduct] = useState(["TV", "Mobile", "Laptop"]);
    const [mars, setMars] = useState({photos:[]});
    useEffect(()=>{
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(response => response.json())
        .then(data => {
            setMars(data);
        })
    },[])

    return (
        // <div className="container">
        //     <h2>Product Details</h2>
        //     <dl>
        //         <dt>Name</dt>
        //         <dd>{product.Name}</dd>
        //         <dt>Price</dt>
        //         <dd>{product.Price}</dd>
        //         <dt>Stock</dt>
        //         <dd>{product.Stock==true?"Available":"Out of Stock"}</dd>
        //     </dl>
        
        
        //     {/* DataBinding Collections */}
        //     <h2>Categories</h2>
        //     <ol>
        //         {
        //             // categories.map(category => <li>{category}</li>) or
        //             categories.map(function(category){
        //                 return(
        //                     <li key={category}>{category}</li>
        //                 )
        //             })
        //         }
        //     </ol>
        //     <h2> Select Category</h2>
        //     <select>
        //         {
        //             categories.map(category => <option value={category} key={category}>{category}</option>)
        //         }
        //     </select>
        // </div>


        //--------------------------------------------------------------------------------------
        // For presenting Table

        // <div className="container">
        //     <h2>Products Table</h2>
        //     <table className="table table-hover">
        //         <thead>
        //             <tr>
        //                 <th>Name</th>
        //                 <th>Price</th>
        //             </tr>
        //         </thead>
        //         <tbody>                   
        //                 {
        //                     products.map(product => 
        //                         <tr>
        //                             <td>{product.Name}</td>
        //                             <td>{product.Price}</td>
        //                         </tr>
        //                     )
        //                 }                 
        //         </tbody>
        //     </table>
        // </div>


        // --------------------------------------------------------------------------------
        // For Nested iterations and drop down.
        
        // <div className="container">
        //         <h2>Categories</h2>
        //         <ol>
        //             {
        //                 menu.map( item =>
        //                     <li key={item.Category}>{item.Category}
        //                         <ul>
        //                             {
        //                                 item.Products.map(product => <li key={product}>{product}</li>)
        //                             }
        //                         </ul>
        //                     </li>
        //                 )
        //             }
        //         </ol>
        //         <h2>Select Categories</h2>
        //         <select>
        //             {
        //                 menu.map(item =>
        //                     <optgroup label={item.Category} key={item.Category}>
        //                         {
        //                             item.Products.map(product => <option key={product}>{product}</option>)
        //                         }
        //                     </optgroup>
        //                 )
        //             }
        //         </select>
        // </div>


        //------------------------------------------------------------------------------------------------------
        // For Two way binding
        // <div className="container">
        //     <h2>User Details</h2>
        //     User Name: 
        //     <input type="text" value={username}/>
        //     <br/>
        //     Hello! {username}
        // </div>
        <div className="container">
            {/* <ol>
                {
                    products.map(product => <li key={product}>{product}</li>)
                }
            </ol> */}

            <h2>Mars photos</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photo ID</th>
                        <th>Camera Name</th>
                        <th>Rover Name</th>
                        <th>Preview</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mars.photos.map(photo => 
                            <tr>
                                <td>{photo.id}</td>
                                <td>{photo.camera.full_name}</td>
                                <td>{photo.rover.name}</td>
                                <td>
                                    <img src={photo.img_src} width="100" height="100" />
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <div className="d-flex flex-wrap">
                {
                    mars.photos.map(photo => 
                        <div className="card p-2 m-2">
                            <img  src={photo.img_src} className="card-img" height="150" />
                            <div className="card-header">
                                <h2>{photo.camera.full_name}</h2>
                            </div>
                            <div className="card-body">
                                {photo.rover.name}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}