import { useState ,useRef} from "react";
import { Link ,useNavigate} from "react-router-dom";
const axios = require('axios').default;

const LogIn = (props) => {
    let inputNameRef=useRef()
    let inputFassRef=useRef()
    const navigate = useNavigate();
    
    const enter = async (event)=>{
    event.preventDefault();
    localStorage.setItem("uzer",JSON.stringify( inputFassRef.current.value ))
    let user = { name: inputNameRef.current.value , fass: inputFassRef.current.value};
    axios.post("http://localhost:3050/login", user )
        .then(
            (data)=>{
                props.setUser(true)
                navigate('/homePage')
                console.log(data);
            },
            (err)=>{
                alert (JSON.stringify(err.response.data.err))
                console.log(err);
            }
        )
}


return (
    // <div>
    // <form onSubmit={enter}>
    // <h1>הכנס שם</h1>
    // <input required  ref={inputNameRef}/>
    // <h1>הכנס סיסמא</h1>
    // <input required ref={inputFassRef}/>
    // <input type={"submit"} />
    // </form>
    // <button><Link to={"/"}> חזרה לעמוד הראשי </Link></button>  
    // </div>
    <div class="login-box">
    <form onSubmit={enter}>
    <div class="user-box">
        <input type="text" name="" required  ref={inputNameRef}/>
        <label>הכנס שם</label>
    </div>
    
    <div class="user-box">
        <input type="text" name="" required  ref={inputFassRef}/>
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
);
};

export default LogIn;
