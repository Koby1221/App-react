import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import imgTitle from "../img/header_headerpurple-hb.jpg"
import "../App.css"
import Time from "./time";
import "../css/firstPage.css"

function FirstPage(props) {
  const navigate = useNavigate();
  
  
  return (
    <div >
     

      <img className="imgTitle" src={imgTitle}/>
      
      
          <Link to={"/manager"} ><button style={{ position: "absolute", left:"200px",top:"50%"}}>מנהל </button></Link>
            
             
             
         
         
        
         
         
          <button style={{ position: "absolute", left:"250px",top:"50%"}} disabled={props.disabled} onClick={()=>{navigate("/login")}}>משתמש</button>
              
           
           
       






    
       
       <br></br>  
        <button className="btnBody"><Link to={"/Scoreboard"}>לוח תוצאות</Link></button> 
        
          
          



      {/* </div> */}

    </div>
  );
}

export default FirstPage;
