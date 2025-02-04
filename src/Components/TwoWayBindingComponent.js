import {useState} from 'react';

export default function TwoWayBindingComponent(){
    const [product, setProduct] = useState({Name:'',Price:0, City:'', Stock:false});
    const [newproduct, setNewproduct] = useState({});

    function handleName(e){
        setProduct({
            Name: e.target.value,
            Price: product.Price,
            City: product.City,
            Stock: product.Stock
        })
    }
    function handlePrice(e){
        setProduct({
            Name: product.Name,
            Price: e.target.value,
            City: product.City,
            Stock: product.Stock
        })
    }
    function handleCity(e){
        setProduct({
            Name: product.Name,
            Price: product.Price,
            City: e.target.value,
            Stock: product.Stock
        })
    }
    function handleStock(e){
        setProduct({
            Name: product.Name,
            Price: product.Price,
            City: product.City,
            Stock: e.target.checked
        })
    }
    function handleRegisterClick(){
        setNewproduct(product);
    }

    return(
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-3'>
                    <h2>Register Product</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd><input type='text' className='form-control' onChange={handleName}/></dd>
                        <dt>Price</dt>
                        <dd><input type='text' className='form-control' onChange={handlePrice}/></dd>
                        <dt>City</dt>
                        <dd>
                            <select onChange={handleCity} className='form-select'>
                                <option>Delhi</option>
                                <option>Hyderabad</option>
                            </select>
                        </dd>
                        <dt>Stock</dt> 
                        <dd className='form-switch'>
                            <input onChange={handleStock} type='checkbox' className='form-check-input'/> Available
                        </dd>
                    </dl>
                    <button onClick={handleRegisterClick} className='btn btn-primary w-100'>Register</button>
                </div>
                <div className='col-9'>
                    <h2>Product Details</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{newproduct.Name}</dd>
                        <dt>Price</dt>
                        <dd>{newproduct.Price}</dd>
                        <dt>City</dt>
                        <dd>{newproduct.City}</dd>
                        <dt>Stock</dt>
                        <dd>{newproduct.Stock==true?"Available":"Out of Stock"}</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}
