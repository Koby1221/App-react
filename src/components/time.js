


function Time(){
   
    let time=new Date().toLocaleTimeString()
    return(
        <div className="time">
            <h1>{time}</h1>
        </div>
    )
}

export default Time

