import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import imgTitle from "../img/header_headerpurple-hb.jpg"
import "../App.css"
import Time from "./time";
import "../css/firstPage.css"
const Swal = require('sweetalert2');
function FirstPage(props) {
  const navigate = useNavigate();
  
  
  return (
    <div className="aa" >
     

      <img className="imgTitle" src={imgTitle}/>
      <div>
      <Link to={"/manager"} ><button style={{ position: "absolute", left:"200px",top:"50%"}}>מנהל </button></Link>

      
      <div id="wrapper">
      <a href="#" class="my-super-cool-btn">
        
      <div class="dots-container">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      </div>
      <span onClick={()=>{navigate("/manager")}}>כניסת מנהל</span>
  </a>



      <a href="#" class="my-super-cool-btn">
      <div class="dots-container">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      </div>
      <span onClick={()=>{
        if (!props.disabled ){
           navigate("/login")
        }
        else{
          Swal.fire({
           title:  "אין בחירות פעילות",
          })
        }
       }}>כניסת משתמש</span>
  </a>




      <a href="#" class="my-super-cool-btn">
      <div class="dots-container">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      </div>
      <span onClick={()=>{navigate("/Scoreboard")}}>לוח תוצאות</span>
  </a>
  </div>




  
      
       </div> 
          
          



     

    </div>
  );
}

export default FirstPage;
