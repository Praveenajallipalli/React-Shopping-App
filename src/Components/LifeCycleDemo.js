import React from 'react';

class SuccessComponent extends React.Component
{
    componentDidMount(){
        alert('Success component will render');
    }

    componentWillUnmount(){
        alert('Success component will unmount');
    }

    render(){
        return(
            <div>
                <h2>Login Success...</h2>
            </div>
        )
    }
}

class ErrorComponent extends React.Component
{
    componentDidMount(){
        alert('Error component will render');
    }

    componentWillUnmount(){
        alert('Error component will unmount');
    }

    render(){
        return(
            <div>
                <h2>Invalid Login</h2>
            </div>
        )
    }
}

export default class LifeCycleDemo extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            UserDetails : {
                UserName: 'John_nit',
                Password: 'john@11'
            },
            FormDetails : {
                UserName: '',
                Password: ''
            },
            result : ''
        }
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLoginCLick = this.handleLoginCLick.bind(this);
    }

    handleUserName(event){
        this.setState({
            FormDetails :
            {
                UserName: event.target.value,
                Password: this.state.UserDetails.Password
            }
        }
        )
    }

    handlePassword(event){
        this.setState({
            FormDetails :
            {
                UserName: this.state.UserDetails.UserName,
                Password: event.target.value
            }
        }
        )
    }

    handleLoginCLick(){
        if(this.state.FormDetails.UserName==this.state.UserDetails.UserName && this.state.FormDetails.Password==this.state.UserDetails.Password){
            this.setState({
                result : <SuccessComponent/>
            })
        }
        else{
            this.setState({
                result : <ErrorComponent/>
            })
        }
    }

    render(){
        return(
            <div className='container'>
                <h2>User Login</h2>
                <dl>
                    <dt>UserName</dt>
                    <dd><input onChange={this.handleUserName} type='text'/></dd>
                    <dt>Password</dt>
                    <dd><input onChange={this.handlePassword} type='password'/></dd>
                </dl>
                <button onClick={this.handleLoginCLick}>Login</button>
                <div>
                    {this.state.result}
                </div>
            </div>
        )
    }
}