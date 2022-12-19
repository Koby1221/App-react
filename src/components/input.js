import { useState } from "react";
const axios = require('axios').default;


const Input = (props) => {
//   const [userName, setUserName] = useState();
//   const [userEmail, setUserEmail] = useState();
const [userName, setUserName] = useState();
const [userPass, setUserPass] = useState();

async function doApi() {
    // let user = { name: userName, email: userEmail };
    let user = { name: userName, color: userPass };
    console.log(user);
    let apiUrl = "http://localhost:3050";
    // axios.post(apiUrl, user );
    // axios.delete(apiUrl, user );
    axios.put(apiUrl, user );
    props.doSearchApi();
    // let resp=await fetch(apiUrl)
    // let data=await resp.json()
    // console.log(data);
    console.log(userName,userPass);
    // {data.map((item,index) =>{
    //     console.log(item.name, item.pass);
    // if(item.name==userName && item.pass==userPass){
    //    props.setdisplay(true)
    //    console.log(props.display);
    // }
    // } )}
    // setTimeout(change,5000)
}
const change =()=>{
    if(props.display==false){
        console.log(props.display);
        alert ("Username or password is incorrect, please click login")
    }
}

return (
    <div>
    <h1>enter name</h1>
    <input
        onChange={(e) => {
        setUserName(e.target.value);
        }}
    />
    <h1>enter color</h1>
    <input
        onChange={(e) => {
            setUserPass(e.target.value);
        }}
    />
    <button onClick={doApi}>enter</button>
    </div>
);
};

export default Input;
