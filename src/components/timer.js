import "../css/firstPage.css"
import { Link, Outlet } from "react-router-dom";
function Timer(props) {
    

    return(
        <div className="bodyNuv">
        <button style={{left:"0%",position: "absolute"  }}><Link to={"/"}> בחזרה לעמוד הראשי</Link></button> 
        

    <div id="clockdiv">
	<div><span class="days">{props.days}</span><div class="smalltext">Days</div></div>
	<div><span class="hours">{props.hours}</span><div class="smalltext">Hours</div></div>
	<div><span class="minutes">{props.minutes}</span><div class="smalltext">Minutes</div></div>
	<div><span class="seconds">{props.seconds}</span><div class="smalltext">Seconds</div></div>
</div>




     
        
        </div>
    )
}


export default Timer;