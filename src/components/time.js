import { useEffect, useState, useRef } from "react"
import { Link, useNavigate } from "react-router-dom";


const Time = (props) => {

    // let inputDaysRef = useRef()
    // let inputTimeRef = useRef()

    const [input1, setinput1] = useState(``)
    const [input2, setinput2] = useState(``)



    const start = (e) => {
        e.preventDefault()
        // props.setInputDaysRef(inputDaysRef.current.value)
        // props.setInputTimeRef(inputTimeRef.current.value)
        props.startApp(input1, input2)
        // console.log(inputDaysRef.current.value, inputTimeRef.current.value);

    }



    return (
        // <div>
        //     <h1 style={{color:"red"}}>{days}d {hours}h {minutes}m {seconds}s</h1>

        // </div>
        <div >

            <div className="login-box">

                <form onSubmit={start}>
                    <div className="user-box">
                        <input type="date" name="" onChange={(e)=>{setinput1(e.target.value)}} />
                        <label>הכנס יום</label>
                    </div>
                    <div className="user-box">
                        <input type="time" name="" onChange={(e)=>{setinput2(e.target.value)}} />
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

        </div>
    )
}

export default Time 