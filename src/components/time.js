import { useEffect, useState, useRef } from "react"
import { Link, useNavigate } from "react-router-dom";


const Time = (props) => {
    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()
    let inputDaysRef = useRef()
    let inputTtimeRef = useRef()




    // Update the count down every 1 second
    const start = (e) => {
        e.preventDefault()
        let date=new Date(inputDaysRef.current.value)
        console.log(inputDaysRef.current.value, inputTtimeRef.current.value);
        console.log(date.getFullYear());
        console.log(date.getMonth(),date.getDate());
         let countDownDate = new Date(date).getTime();
        // let countDownDate = new Date("Jan 2, 2023 17:37:25").getTime();
        console.log(countDownDate);
        var x = setInterval(function () {
            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;
            console.log(days);
            // Time calculations for days, hours, minutes and seconds
            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000))


            // Output the result in an element with id="demo"


            // If the count down is over, write some text 
            if (distance <= 0) {
                clearInterval(x);

            }
        }, 1000);

    }

    // useEffect(start, [days, seconds])




    return (
        // <div>
        //     <h1 style={{color:"red"}}>{days}d {hours}h {minutes}m {seconds}s</h1>

        // </div>
        <>
            <h1 style={{ color: "red" }}>{days}d {hours}h {minutes}m {seconds}s</h1>
            <div className="login-box">

                <form onSubmit={start}>
                    <div className="user-box">
                        <input type="date" name="" required ref={inputDaysRef} />
                        <label>הכנס יום</label>
                    </div>
                    <div className="user-box">
                        <input type="time" name="" required ref={inputTtimeRef} />
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