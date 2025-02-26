import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Electronics from "./Electronics"
import Footwear from "./Footwear"
import Fashion from "./Fashion"

export default function ShoppingIndex(){
    return(
        <div className="container-fluid">
            <Router>
                <ul>
                    <li><Link to="/electronics">Electronics</Link></li>
                    <li><Link to="/footwear">Footwear</Link></li>
                    <li><Link to="/fashion">Fashion</Link></li>
                </ul>
                <hr/>
                <Routes>
                    <Route path="/electronics" element={<Electronics/>}></Route>
                    <Route path="/footwear" element={<Footwear/>}></Route>
                    <Route path="/fashion" element={<Fashion/>}></Route>
                </Routes>
            </Router>
            
        </div>
    )
}