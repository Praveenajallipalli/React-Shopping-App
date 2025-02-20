import { useState, useEffect } from "react";

export function useCaptcha(){
    var [code, setCode] = useState(0);
    useEffect(()=>{
        var a = Math.random()*10;
        var b = Math.random()*10;
        var c = Math.random()*10;
        var d = Math.random()*10;
        var e = Math.random()*10;
        var f = Math.random()*10;
        setCode(`${Math.round(a)} ${Math.round(b)} ${Math.round(c)} ${Math.round(d)} ${Math.round(e)} ${Math.round(f)}`);
    },[])
    return {code};
} 