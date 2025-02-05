import { useState, useEffect } from "react";

export default function ShoppingComponent(){
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    function LoadCategories(){
        fetch('https://fakestoreapi.com/products/categories')
        .then(response => response.json())
        .then(data => {
            data.unshift("All");
            setCategories(data);
        })
    }

    function LoadProducts(url){
        fetch(url)
        .then(response => response.json())
        .then( data => {
            setProducts(data);
        })
    }

    function handleCategoryChange(e){
        if(e.target.value=="ALL"){
            LoadProducts('https://fakestoreapi.com/products');
        }else{
            LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value.toLowerCase()}`)
        }
    }

    function handleAddtoCart(e){
        fetch(`https://fakestoreapi.com/products/${e.target.id}`)
        .then(response => response.json())
        .then(data => {
            cartItems.push(data);
            getCartItemsCount();
            totalPriceTable();
        })  
    }

    function getCartItemsCount(){
        setItemsCount(cartItems.length);
    }

    function handleDeleteCartItem(e){
        let id = e.target.id;
        
        if(id == 0){
            console.log(e.target.value);
            cartItems.length=0;
            getCartItemsCount();
            totalPriceTable();
        }else{
            let index = cartItems.findIndex(item => 
                item.id==id
            );
            if(index != -1){
                cartItems.splice(index,1);
            }
            getCartItemsCount();
            totalPriceTable();
        }
    }

    function totalPriceTable(){
        let price = 0;
        for(let i=0; i<cartItems.length;i++){
            price = price + cartItems[i].price;
        }
        setTotalPrice(price);
    }

    useEffect(()=>{
        LoadCategories();
        LoadProducts('https://fakestoreapi.com/products');
    },[cartItems.length])


    return(
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2">
                <h1><span className="bi bi-cart"></span>Shopping Home</h1>
            </header>
            <section className="row mt-3">
                <nav className="col-2">
                    <div>
                        <label>Select a Category</label>
                        <div>
                            <select onChange={handleCategoryChange} className="form-select">
                                
                                {
                                    categories.map(category => <option key={category}>{category.toUpperCase()}</option>)
                                }
                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col-6 d-flex flex-wrap overflow-auto" style={{height:"400px"}} > 
                    {
                        products.map(product =>
                            <div key={product.id} className="card m-2 p-2 w-25" style={{width:"200px"}}>
                                <img src={product.image} className="card-img-top" height="150" />
                                <div className="card-header" style={{height:"160px"}} >
                                    <p>{product.title}</p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>
                                            <span className="bi bi-star-fill text-success"></span>
                                            {product.rating.rate} <span>[{product.rating.count }]</span>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="footer">
                                    <button onClick={handleAddtoCart} key={product.id} id={product.id} className="btn btn-danger w-100">
                                        <span className="bi bi-cart4"></span> Add to Cart
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </main>
                <aside className="col-4">
                    <button className="btn btn-danger w-100">
                        <span className="bi bi-cart3"></span> [{itemsCount}] Your Cart Items
                    </button>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Preview</th>
                                <th>
                                    <button id={0} onClick={handleDeleteCartItem} className="btn btn-danger">Remove All</button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map(item =>
                                    <tr key={item.id}>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <img src={item.image} width="50" height="50" />
                                        </td>
                                        <td>
                                            <button onClick={handleDeleteCartItem} id={item.id} className="btn btn-danger">
                                                <span className="bi bi-trash"></span>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Total</th>
                                <td>{totalPrice}</td>
                            </tr>
                        </tfoot>
                    </table>
                </aside>
            </section>
        </div>
    )
}