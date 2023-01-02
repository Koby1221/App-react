import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
const axios = require('axios').default;

const Scoreboard= (props)=>{
	let [arr, setArr] = useState([])


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

	

	
	
	
	useEffect(() => {
		doSearchApi();
	},[]);

	
	return(
		<div>
			<h1>welcome to server </h1>
			{
				arr.map((item,index) =>{
					return(
						<div key={index}  className="list" >
							<h1>{item.name}</h1>
							<h1>{item.NumberOfVotes}</h1>
							{/* <img src={item.img}></img> */}
						</div>
					)
				}

				)
			}
			<button><Link to={"/"}> Back to home page </Link></button> 
		</div>
	)
}

export default Scoreboard