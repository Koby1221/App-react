import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import imgTitle from "../img/header_headerpurple-hb.jpg"
import "../App.css"
import Time from "./time";
import "../css/firstPage.css"

function FirstPage(props) {
  const navigate = useNavigate();
  
  
  return (
    <div className="time">
      <img className="imgTitle" src={imgTitle}/>
      
      <div style={{ paddingLeft: 16 }}></div>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
    <div className="all-cards">
        <div className="card1">
          <button><Link to={"/manager"} ><img
             src="https://www.w3schools.com/howto/img_avatar.png"
             
              // src={imgTitle}
            alt="Avatar"
          /></Link></button>
        
          <div className="container">
            <h4>
              <b>מנהל</b>
            </h4>
              </div>
          </div>
          <div className="card2">
          <button disabled={props.disabled} onClick={()=>{navigate("/login")}}><img
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt="Avatar"
            /></button>
            <div className="container">
              <h4>
                <b>משתמש</b>
              </h4>
            </div>
          </div>







        <div className="buttons">
       <button role="button" className="button"><Link to={"/"}> בחזרה לעמוד הראשי</Link></button> 
       <br></br>  
       <br></br>  
       <br></br>  
        <button role="button" className="button"><Link to={"/Scoreboard"}>לוח תוצאות</Link></button> 
        
          
          
</div>


      </div>

    </div>
  );
}

export default FirstPage;
