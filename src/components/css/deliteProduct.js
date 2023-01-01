import { useState ,useEffect,useRef} from "react";
import { Link,useNavigate } from "react-router-dom";
const axios = require('axios').default;
const Swal = require('sweetalert2');

const DeleitProduct=(props)=>{
    let inputNameRef=useRef()
    const navigate = useNavigate();
    
    const change=()=>{
    let manager=JSON.parse (localStorage.getItem("manager"))
    console.log(manager);
    if(manager==null){
    Swal.fire({
        icon: 'error',
        title: "כניסה אינה מורשית",
    })
    navigate('/')
    }
    }
    
    useEffect(change,[])
    
    const Send=(event)=>{
        event.preventDefault();
        let user = { name: inputNameRef.current.value};
        let apiUrl = "http://localhost:3050/deleteProduct";
        axios.post(apiUrl, user ).then(
            (data) => {
                console.log(data);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: data.data.message,
                    showConfirmButton: false,
                    timer: 1500
                })
                },
                (err) => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: err.response.data.err,
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
                }
        );
    }
    return(
        <div class="login-box">
        <form onSubmit={Send}>
        <div class="user-box">
            <input type="text" name="" required  ref={inputNameRef}/>
            <label>הכנס שם</label>
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

export default DeleitProduct
