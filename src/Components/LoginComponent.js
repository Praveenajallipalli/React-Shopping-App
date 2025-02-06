import { useState } from "react"

// style binding
export default function LoginComponent(){
    const [theme, setTheme] = useState({});

    function handleThemeChange(e){
        if(e.target.checked){
            setTheme({
                backgroundColor: 'black',
                color: 'white',
                width: '250px',
                padding: '10px'
            })
        }else{
            setTheme({
                backgroundColor: 'white',
                color: 'black',
                width: '250px',
                padding: '10px'
            })
        }
    }

    return(
        <div className="container-fluid">
            <div style={theme}>
                <h2>User Login</h2>
                <div className="form-switch">
                    <input onChange={handleThemeChange} type="checkbox" className="form-check-input"/> Dark Theme
                </div>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="tetx"/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" /></dd>
                </dl>
                <button>Login</button>
            </div>
        </div>
    )
}