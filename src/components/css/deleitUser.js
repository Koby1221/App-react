import { useState,useEffect,useRef } from "react";
import { Link,useNavigate } from "react-router-dom";
const axios = require('axios').default;
const Swal = require('sweetalert2');

const DeleitUser=(props)=>{
    let inputNameRef=useRef()
    let inputLastNameRef=useRef()
    let inputIdRef=useRef()
    const navigate = useNavigate();
    
    const change=()=>{
    let manager=JSON.parse (localStorage.getItem("manager"))
    console.log(manager);
    if(manager==null){
    // alert("Entry is not authorized")
    Swal.fire({
        icon: 'error',
        title: "כניסה אינה מורשית",
      })
    navigate('/')
    }
    }
    
    useEffect(change,[])
    
    
    const Send= async(event)=>{
        event.preventDefault();
        let user = { name: inputNameRef.current.value, LastName: inputLastNameRef.current.value, id: inputIdRef.current.value};
        console.log(user);
        axios.post("http://localhost:3050/delete", user ).then(
            (data)=>{
                console.log(data);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: data.data.message,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        ,
            (err)=>{
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: err.response.data.err
                  })
        });
    }
    return(
    
        <div class="login-box">
        <form onSubmit={Send}>
        <div class="user-box">
            <input type="text" name="" required  ref={inputNameRef}/>
            <label>הכנס שם</label>
        </div>
        <div class="user-box">
            <input type="text" name="" required  ref={inputLastNameRef}/>
            <label> הכנס שם משפחה</label>
        </div>
        <div class="user-box">
            <input type="text" name="" required  ref={inputIdRef}/>
            <label>הכנס תז</label>
        </div>
        <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <input type={"submit"} />
        </a>
        </form>
        <button><Link to={"/"}> חזרה לעמוד הראשי </Link></button> 
        </div>
    )
}

export default DeleitUser
