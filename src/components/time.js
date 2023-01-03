import { useEffect, useState, useRef } from "react"
import { Link, useNavigate } from "react-router-dom";


const Time = (props) => {
   
    let inputDaysRef = useRef()
    let inputTimeRef = useRef()




   const start=(e)=>{
    e.preventDefault()
    // props.setInputDaysRef(inputDaysRef.current.value)
    // props.setInputTimeRef(inputTimeRef.current.value)
      
    // console.log( props.startApp);

   }



    return (
        // <div>
        //     <h1 style={{color:"red"}}>{days}d {hours}h {minutes}m {seconds}s</h1>

        // </div>
        <>
           
            <div className="login-box">

                <form onSubmit={props.startApp(inputDaysRef.current.value , inputTimeRef.current.value)}>
                    <div className="user-box">
                        <input type="date" name="" required ref={inputDaysRef} />
                        <label>הכנס יום</label>
                    </div>
                    <div className="user-box">
                        <input type="time" name="" required ref={inputTimeRef} />
                        <label> הכנס שעה </label>
                    </div>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <input type={"submit"} />
                    </a>
                </form>
                <button><Link to={"/"}> חזרה לעמוד הראשי </Link></button>
            </div>
           
        </>
    )
}

export default Time 