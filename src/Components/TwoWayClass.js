import React from 'react';
export default class TwoWayClass extends React.Component
{
    // constructor(props){
    //     super(props);
    //     super.state // for using base class state
    //     this.state = {
    //         title : 'Product Details',
    //         Name : 'Samsung TV',
    //         Price : 56000.4,
    //         Stock : true,
    //         Cities : ['Delhi','Hyderabad'],
    //         Rating : {rate:4.5, count:6700}
    //         UserName : "John"
    //     } ;
    // }
    constructor(props){
        super(props);
        this.state = {
            UserName : "John"
        } ;
        this.handleUserChange = this.handleUserChange.bind(this);
    }


    handleUserChange(e){
        this.setState({
            UserName : e.target.value
        })
    }

    render(){
        return(
            <div className='container-fluid'>

                {/* One way binding in class component */}

                {/* <h2>{this.state.title}</h2>
                <dl>
                    <dt>Name</dt>
                    <dd>{this.state.Name}</dd>
                    <dt>Price</dt>
                    <dd>{this.state.Price}</dd>
                    <dt>Stock</dt>
                    <dd>{this.state.Stock==true?"Available":"Not Available"}</dd>
                    <dt>Cities</dt>
                    <dd>
                        <ol>
                            {
                                this.state.Cities.map(city => 
                                    <li key={city}>{city}</li>
                                )    
                            }
                        </ol>
                    </dd>
                    <dt>Rating</dt>
                    <dd>
                        <span className='bi bi-star-fill text-success'></span> {this.state.Rating.rate} [{this.state.Rating.count}]
                    </dd>
                </dl> */}

                {/* Two way binding in class component   */}

                <h2>User Details</h2>
                <input onChange={this.handleUserChange} type='text' />
                <br/>
                <p>Hello! {this.state.UserName}</p>
            </div>
        )
    }
}