import React from "react";

export default class ShoppingClassComponent extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            categories : [],
            products : []
        }
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    GetCategories(){
        fetch('https://fakestoreapi.com/products/categories')
        .then(response => response.json())
        .then(data => {
            this.setState({
                categories : data
            })
        })
    }

    GetProducts(url){
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                products : data
            })
        })
    }

    handleCategoryChange(e){
        this.GetProducts(`https://fakestoreapi.com/products/category/${e.target.value.toLowerCase()}`);
    }

    componentDidMount(){
        this.GetCategories();
        this.GetProducts('https://fakestoreapi.com/products');
    }

    render(){
        return(
            <div className="container-fluid">
                <header className="bg-danger p-2 text-center text-white">
                    <span className="bi bi-cart"></span> Shopping Cart
                </header>
                <section className="row">
                    <nav className="col-3">
                        <h2>Select category</h2>
                        <select onChange={this.handleCategoryChange} className="form-select">
                                {
                                    this.state.categories.map(category => 
                                        <option key={category}>{category.toUpperCase()}</option>
                                    )
                                }
                        </select>
                    </nav>
                    <main className="col-6" >
                        <div className="d-flex flex-wrap">
                                {
                                    this.state.products.map(product => 
                                        <div key={product.id} className="card p-2 m-2" style={{width:"200px"}} >
                                            <img src={product.image} className="card-img-top" height="150" />
                                            <div className="card-header" style={{height:"160px"}}>
                                                <p>{product.title}</p>
                                            </div>
                                        </div>
                                    )
                                }
                        </div>
                    </main>
                    <aside className="col-3">

                    </aside>
                </section>
            </div>
        )
    }
}