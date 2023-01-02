


function Time(){
    console.log( Math.floor(Math.random() * 1000000));
    let time=new Date().toLocaleTimeString()
    return(
        <div className="time">
            <h1>{time}</h1>
        </div>
    )
}

export default Time

