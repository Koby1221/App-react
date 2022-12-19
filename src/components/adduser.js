import { useEffect, useRef, useState } from "react";
import {  Link ,useNavigate} from "react-router-dom";
const axios = require("axios").default;

function Adduser() {
  const navigate = useNavigate();
  let inputNameRef=useRef()
  let inputLastNameRef=useRef()
  let inputIdRef=useRef()
  let inputDateofbirthRef=useRef()
  let inputResidenceRef=useRef()
  
  
  
  const change=()=>{
  let manager=JSON.parse (localStorage.getItem("manager"))
  console.log(manager);
  if(manager==null){
    alert("Entry is not authorized")
    navigate('/')
  }
  }
  useEffect(change,[])


  const Send = (event) => {
    event.preventDefault();
    let user = {
      name: inputNameRef.current.value,
      LastName: inputLastNameRef.current.value,
      ID: inputIdRef.current.value,
      Dateofbirth: inputDateofbirthRef.current.value,
      Residence:inputResidenceRef.current.value,
      Suffrage:true

    };
    console.log(user);
    let apiUrl = "http://localhost:3050";
    axios.post(apiUrl, user).then(
      (data) => {
        console.log(data);
        alert (JSON.stringify(data.data.message))
      },
      (err) => {
        alert (JSON.stringify(err.response.data.err))
        console.log(err);
      }
    );
  };
  return (
    <div className="tim">
      <form onSubmit={Send}>
        <h2>enter Name</h2>
        <input ref={inputNameRef} required/>
        <h2>enter Last Name</h2>
        <input ref={inputLastNameRef} required/>
        <h2>enter ID</h2>
        <input  ref={inputIdRef} required/>
        <h2>enter Date of birth</h2>
        <input ref={inputDateofbirthRef} type={"date"} required/>
        <h2>enter Residence</h2>
        <input ref={inputResidenceRef} required />
        <input type={"submit"} />
        <button><Link to={"/"}> Back to home page </Link></button> 
      </form>
    </div>
  );
}

export default Adduser;
