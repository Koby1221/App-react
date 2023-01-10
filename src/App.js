import logo from "./logo.svg";
import "./App.css";
import "../src/css/firstPage.css"
import img from "./img/wos144354.jpg"
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Time from "./components/time";
import LogIn from "./components/login";
import Adduser from "./components/adduser";
import Manager from "./components/manager";
import Timer from "./components/timer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FirstPage from "./components/firstPage";
import DeleitUser from "./components/deleitUser";
import AddProduct from "./components/addProducts";
import HomePage from "./components/homePage";
import Scoreboard from "./components/Scoreboard";
import DeleitProduct from "./components/deliteProduct";


function App() {
  let [user, setUser] = useState(false);
  const [days, setDays] = useState("0");
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [inputDaysRef, setInputDaysRef] = useState(false);
  const [inputTimeRef, setInputTimeRef] = useState(false);
  const [seconds, setSeconds] = useState("0");
  const [disabled, setdisabled] = useState(true);

  const startApp = (e, r) => {

    setInputDaysRef(e);
    setInputTimeRef(r);
    setdisabled(false)

  }



  const Interval = () => {
    let x;
    if (inputDaysRef) {

      x = setInterval(function () {
        console.log(inputDaysRef);
        let date = new Date(inputDaysRef);
        let text = (String(date));
        let result = text.substring(3, 10);
        let ms = result + " " + String(date.getFullYear()) + " " + String(inputTimeRef);
        let countDownDate = new Date(ms).getTime();
        let now = new Date().getTime();
        let distance = countDownDate - now;


        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
        setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000))






        if (distance <= 0) {
          clearInterval(x);
          setDays("0");
          setHours("0");
          setMinutes("0");
          setSeconds("0");
          setdisabled(true)

        }
      }, 1000);
    }
    
    return () => {
      console.log("RE");
      clearInterval(x)
    };

  }

  
  useEffect(Interval, [inputTimeRef])

  return (
    <div className="app" style={{ backgroundImage: `url(${img})`}}>
      <div>
        
      <BrowserRouter>
      
       <Timer days={days} hours={hours} minutes={minutes} seconds={seconds} ></Timer> */}
        <Routes>
          <Route path="/" element={<FirstPage disabled={disabled} />} />
          <Route path="/Manager" element={<Manager />} />
          <Route path="/Adduser" element={<Adduser />} />
          <Route path="/login" element={<LogIn setUser={setUser} />} />
          <Route path="/deleitUser" element={<DeleitUser />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/homePage" element={<HomePage user={user} />} />
          <Route path="/Scoreboard" element={<Scoreboard />} />
          <Route path="/deleitproduct" element={<DeleitProduct />} />
          <Route path="/time" element={<Time startApp={startApp} />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
