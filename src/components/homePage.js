import React, { useEffect, useState } from "react";
import {  Link ,useNavigate} from "react-router-dom";
const axios = require('axios').default;

const HomePage= (props)=>{
	let [arr, setArr] = useState([])
	const navigate = useNavigate();
	let id=JSON.parse (localStorage.getItem("uzer"))

	const change=()=>{
	if(id==null || ! props.user){
    alert("כניסה אינה מורשית")
    navigate('/')
}
}


	const doSearchApi = async () => {
		axios.get(`http://localhost:3050/homePage`)
		.then(
			(data)=>{
				let dataFromServer = data.data.data
				setArr(dataFromServer)
				console.log("arr = ",dataFromServer);
			},
			(err)=>{
				console.log("err");
			}
		)
	};

	

	const send=(e)=>{
		
		console.log(e);
		const name =arr[e].name
		console.log(name);
		axios.post(`http://localhost:3050/Numberofvotes`,{name:name,id:id})
		.then((data)=>{
				console.log(data)
				navigate('/')
			});

			
	}
	
	useEffect(() => {
		doSearchApi();
		change();
	},[]);

	
	return(
		<div id="divv">
			<h1>welcome to server </h1>
			{
				arr.map((item,index) =>{
					return(
						<div key={index} >
							<button  onClick={() =>{send(index)}}>
							<img className="img" src={item.img}></img></button>
							</div>
					)
				}
				)
			}
			<button><Link to={"/"}> Back to home page </Link></button> 
		</div>
	)
}

export default HomePage