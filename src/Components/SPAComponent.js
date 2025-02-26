import { BrowserRouter, Routes, Route, Link, Outlet, useLocation } from "react-router-dom";
import ShoppingComponent from '../Components/ShoppingComponent';


function HTML(){
    return(
        <>
            <main>
                <h2>HTML</h2>
                <p>It is a markup language.</p>
            </main>
        </>
    )
}

function CSS(){
    return(
        <>
            <main>
                <h2>CSS</h2>
                <p>This defines styles.</p>
            </main>
        </>
    )
}

function JS(){
    return(
        <>
            <main>
                <h2>JS</h2>
                <p>This is a Scripting language.</p>
            </main>
        </>
    )
}

export default function SPAComponent(){
   
    return(
        <div className="container-fluid">
            <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to="/html">HTML</Link></li>
                        <li><Link to="/css">CSS</Link></li>
                        <li><Link to="/js">JS</Link></li>
                        <li><Link to="/shopping">Shopping</Link></li>
                    </ul>
                </nav>
                <hr/>
                <Outlet/>
            </BrowserRouter>
        </div>
    )
}