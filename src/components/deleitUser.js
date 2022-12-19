import { useState,useEffect,useRef } from "react";
import { Link,useNavigate } from "react-router-dom";
const axios = require('axios').default;

const DeleitUser=(props)=>{
    let inputNameRef=useRef()
    let inputLastNameRef=useRef()
    let inputIdRef=useRef()
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
    
    
    const Send= async(event)=>{
        event.preventDefault();
        let user = { name: inputNameRef.current.value, LastName: inputLastNameRef.current.value, id: inputIdRef.current.value};
        console.log(user);
        axios.post("http://localhost:3050/delete", user );
    }
    return(
        <div>
        <form onSubmit={Send}>
            <h2>enter Name</h2>
            <input required ref={inputNameRef}/>
            <h2>enter Last Name</h2>
            <input required ref={inputLastNameRef}  />
            <h2>enter ID</h2>
            <input required ref={inputIdRef}/>
            <input type={"submit"} />
            <button><Link to={"/"}> Back to home page </Link></button> 
        </form>
        </div>
    )
}

export default DeleitUser
