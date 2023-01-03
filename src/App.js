import logo from "./logo.svg";
import "./App.css";

import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Time from "./components/time";
import LogIn from "./components/login";
import Adduser from "./components/adduser";
import Manager from "./components/manager";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FirstPage from "./components/firstPage";
import DeleitUser from "./components/deleitUser";
import AddProduct from "./components/addProducts";
import HomePage from "./components/homePage";
import Scoreboard from "./components/Scoreboard";
import DeleitProduct from "./components/deliteProduct";


function App() {

  const [days, setDays] = useState("0")
  const [hours, setHours] = useState("0")
  const [minutes, setMinutes] = useState("")
  const [inputDaysRef, setInputDaysRef] = useState(false)
  const [inputTimeRef, setInputTimeRef] = useState(false)
  const[seconds,setSeconds]=useState("0")

   const startApp = (e,r)=> {
   console.log("e=",e, "r=",r);
     setInputDaysRef(e);
     setInputTimeRef(r);

     
    
   
  }

  const play=()=>{
    if(inputDaysRef){
      console.log( "inputDaysRef=" , inputDaysRef, "inputTimeRef=", inputTimeRef);
  
      let x = setInterval(function () {
        console.log( "inputDaysRef=" , inputDaysRef, "inputTimeRef=", inputTimeRef);
          let date=new Date(inputDaysRef);
          // let date=new Date(inputDaysRef.current.value);
          let text=(String(date));
          let result = text.substring(3, 10);
          let ms = result+" "+ String(date.getFullYear()) +" "+String(inputTimeRef);
          console.log(ms);
          console.log( "inputDaysRef=" , inputDaysRef, "inputTimeRef=", inputTimeRef);
          let countDownDate = new Date(ms).getTime();
          let now = new Date().getTime();
          let distance = countDownDate - now;
    
          
          setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
          setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
          setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
          setSeconds(Math.floor((distance % (1000 * 60)) / 1000))
    
    
          
    
    
          
          if (distance <= 0) {
              clearInterval(x);
    
          }
      }, 1000);
    }
   
   }

  let [user, setUser] = useState(false);
  useEffect(play,[inputTimeRef,inputTimeRef])

  return (
    <div>
       <h1 style={{ color: "red" }}>{days}d {hours}h {minutes}m {seconds}s</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/Manager" element={<Manager />} />
          <Route path="/Adduser" element={<Adduser />} />
          <Route path="/login" element={<LogIn setUser={setUser} />} />
          <Route path="/deleitUser" element={<DeleitUser />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/homePage" element={<HomePage user={user} />} />
          <Route path="/Scoreboard" element={<Scoreboard />} />
          <Route path="/deleitproduct" element={<DeleitProduct />} />
          <Route path="/time" element={<Time startApp={startApp} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
