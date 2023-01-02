import logo from "./logo.svg";
import "./App.css";

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
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
// בדיקה אם השטות הזו עובדת !
function App() {
  let [user, setUser] = useState(false);

  return (
    <div>
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
          <Route path="/time" element={<Time/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
