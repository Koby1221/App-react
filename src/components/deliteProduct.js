import { useState ,useEffect,useRef} from "react";
import { Link,useNavigate } from "react-router-dom";
const axios = require('axios').default;

const DeleitProduct=(props)=>{
    let inputNameRef=useRef()
    const navigate = useNavigate();
    
    const change=()=>{
    let manager=JSON.parse (localStorage.getItem("manager"))
    console.log(manager);
    if(manager==null){
    alert("Entry is not authorized")
    navigate('/')
    }
    }
    
    useEffect(change,[])
    
    const Send=()=>{
        let user = { name: inputNameRef.current.value};
        let apiUrl = "http://localhost:3050/deleteProduct";
        axios.post(apiUrl, user );
    }
    return(
        <div>
        <form>
            <h2>enter Name</h2>
            <input ref={inputNameRef} required />
            <button onClick={Send}>Send</button>
            <button><Link to={"/"}> Back to home page </Link></button> 
        </form>
        </div>
    )
}

export default DeleitProduct
