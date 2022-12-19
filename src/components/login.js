import { useState ,useRef} from "react";
import { Link ,useNavigate} from "react-router-dom";
const axios = require('axios').default;

const LogIn = (props) => {
    let inputNameRef=useRef()
    let inputIdRef=useRef()
    const navigate = useNavigate();
    
    const enter = async (event)=>{
    event.preventDefault();
    localStorage.setItem("uzer",JSON.stringify( inputIdRef.current.value ))
    let user = { name: inputNameRef.current.value , id: inputIdRef.current.value};
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
    <div>
    <form onSubmit={enter}>
    <h1>enter name</h1>
    <input required  ref={inputNameRef}/>
    <h1>enter id</h1>
    <input required ref={inputIdRef}/>
    <input type={"submit"} />
    </form>
    <button><Link to={"/"}> Back to home page </Link></button>  
    </div>
);
};

export default LogIn;
