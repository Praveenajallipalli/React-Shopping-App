import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

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

function HTML(){
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
                    </ul>
                </nav>
                <hr/>
                <Routes>
                    <Route path="/html" element={<main>
                        <h2>HTML</h2>
                        <p>This is a markup language</p>
                    </main>}/>
                    <Route path="/html" element={<main>
                        <h2>HTML</h2>
                        <p>This is a markup language</p>
                    </main>}/>
                    <Route path="/css" element={<main>
                        <h2>CSS</h2>
                        <p>This defines styles</p>
                    </main>}/>
                    <Route path="/js" element={<main>
                        <h2>JavaScript</h2>
                        <p>This is a Scripting language</p>
                    </main>}/>
                    <Route path="/" element={<main>
                        <h2>Home</h2>
                        <p>Tutorial Home</p>
                    </main>}/>
                    <Route path="*" element={<main>
                        <code>Not Found: Page you requested Not found</code>
                    </main>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}