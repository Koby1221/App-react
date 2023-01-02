import { useEffect, useRef, useState } from "react";
import {  Link ,useNavigate} from "react-router-dom";
import "../css/form.css"
const axios = require("axios").default;
const Swal = require('sweetalert2');

function Adduser() {
  const navigate = useNavigate();
  let inputNameRef=useRef()
  let inputLastNameRef=useRef()
  let inputIdRef=useRef()
  let inputEmailRef=useRef()
  let inputDateofbirthRef=useRef()
  let inputResidenceRef=useRef()
  
  
  
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


  const Send = (event) => {
    event.preventDefault();
    let user = {
      name: inputNameRef.current.value,
      LastName: inputLastNameRef.current.value,
      ID: inputIdRef.current.value,
      Dateofbirth: inputDateofbirthRef.current.value,
      Residence:inputResidenceRef.current.value,
      Email:inputEmailRef.current.value,
      Fass:0,
      Suffrage:true

    };
    console.log(user);
    let apiUrl = "http://localhost:3050";
    axios.post(apiUrl, user).then(
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
  };
  return (
  <div class="login-box">
<h2>הרשמה</h2>
<form onSubmit={Send}>
  <div class="user-box">
    <input type="text" name="" required  ref={inputNameRef}/>
    <label>הכנס שם</label>
  </div>
  <div class="user-box">
    <input type="text" name="" required ref={inputLastNameRef}/>
    <label>הכנס שם משפחה</label>
  </div>
  <div class="user-box">
    <input type="text" name="" required  ref={inputIdRef} />
    <label>הכנס תעודת זהות</label>
  </div>
  <div class="user-box">
    <input name=""  ref={inputEmailRef} type={"email"}  required/>
    <label>הכנס כתובת מייל</label>
  </div>
  <div class="user-box">
    <input required name="" ref={inputDateofbirthRef} type={"date"}/>
    <label>הכנס תאריך לידה</label>
  </div>
  <div class="user-box">
    <input type="text" name=""ref={inputResidenceRef} required/>
    <label>הכנס עיר מגורים</label>
  </div>
  <a href="#">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type={"submit"} />
  </a>
</form>
<button><Link to={"/"}> Back to home page </Link></button> 
</div>


  );
}

export default Adduser;
