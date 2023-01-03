import { useEffect, useState, useRef } from "react"
import { Link, useNavigate } from "react-router-dom";


const Time = (props) => {
   
    let inputDaysRef = useRef()
    let inputTimeRef = useRef()

    const [input1, setinput1] = useState(`0`)
    const [input2, setinput2] = useState(`0`)



   const start=(e)=>{
    e.preventDefault()
    // props.setInputDaysRef(inputDaysRef.current.value)
    // props.setInputTimeRef(inputTimeRef.current.value)
      props.startApp(inputDaysRef.current.value , inputTimeRef.current.value)
     console.log(inputDaysRef.current.value ,inputTimeRef.current.value );

   }



    return (
        // <div>
        //     <h1 style={{color:"red"}}>{days}d {hours}h {minutes}m {seconds}s</h1>

        // </div>
        <>
           
            <div className="login-box">
            
                 <form onSubmit= {start}> 
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
                <button onClick={start}></button>
                <button><Link to={"/"}> חזרה לעמוד הראשי </Link></button>
            </div>
           
        </>
    )
}

export default Time 