import { useState,useEffect,useRef } from "react"
import { Link,useNavigate } from "react-router-dom";
const axios = require('axios').default;



function AddProduct(){
    let inputNameRef=useRef()
    let inputImgRef=useRef()
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
        let product = { name: inputNameRef.current.value, img: inputImgRef.current.value ,NumberOfVotes:0};
        let apiUrl = "http://localhost:3050/product";
        axios.post(apiUrl, product );
    }
    
    return(
        <div className="tim">
        <form onSubmit={Send}>
            <h2>enter Name</h2>
            <input ref={inputNameRef} required />
            <h2>enter srs img</h2>
            <input ref={inputImgRef}/>
            <input type={"submit"}/>
            <button><Link to={"/"}> Back to home page </Link></button> 
        </form>
        </div>
    )
}

export default  AddProduct

