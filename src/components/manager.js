import { Link } from "react-router-dom"
import React, { useEffect, useState ,useRef} from "react";
const axios = require('axios').default;

const Manager=(props)=>{
    let [display, setDisplay] = useState("block");
    let [display2, setDisplay2] = useState("none");
    let inputNameRef=useRef()
    let inputPassRef=useRef()
    
    const enter =(event)=>{
        event.preventDefault();
        let user = { Username: inputNameRef.current.value, Password: inputPassRef.current.value };
        axios.post("http://localhost:3050/manager", user )
        .then(
            (data)=>{
            console.log(data);
            localStorage.setItem("manager",JSON.stringify( inputPassRef.current.value))
            setDisplay("none")
            setDisplay2("block")
            },
            (err)=>{
                alert (JSON.stringify(err.response.data.message))
                console.log(err);
            }
        )
    }

    return(
        // <div>
        //     <div style={{display:display}}>
        //         <h1>הכנס שם</h1>
        //         <input ref={inputNameRef} required></input>
        //         <h1>הכנס סיסמא </h1>
        //         <input  ref={inputPassRef} required></input>
        //         <button onClick={enter}>אישור</button>
        //     </div>
        <>
        <div class="login-box" style={{display:display}}>
        <form onSubmit={enter}>
        <div class="user-box">
            <input type="text" name="" required  ref={inputNameRef}/>
            <label>הכנס שם</label>
        </div>
        
        <div class="user-box">
            <input type="text" name="" required  ref={inputPassRef}/>
            <label>הכנס סיסמא</label>
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
        
            <div style={{display:display2}}>
            <button ><Link to={"/"}> חזרה לעמוד הראשי </Link></button>  
            <button><Link to={"/adduser"}><h1>הוספת בוחר</h1></Link></button>
            <button><Link to={"/deleitUser"}><h1>הסרת בוחר</h1></Link></button>
            <button><Link to={"/addproduct"}><h1>הוספת פריט</h1></Link></button>
            <button><Link to={"/deleitproduct"}><h1>מחיקת פריט</h1></Link></button>
            </div>
            <button><Link to={"/time"}><h1>התחל בחירות </h1></Link></button>
            
            </>
      
    )
}

export default Manager