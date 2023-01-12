import React, { useEffect, useState } from "react";
import {  Link ,useNavigate} from "react-router-dom";

const axios = require('axios').default;
const Swal = require('sweetalert2');

const HomePage= (props)=>{
	let [arr, setArr] = useState([])
	const navigate = useNavigate();
	let id=JSON.parse (localStorage.getItem("uzer"))

	const change=()=>{
	if(id==null || ! props.user){
		Swal.fire({
			icon: 'error',
			title: "כניסה אינה מורשית",
		  })
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
		change();
		doSearchApi();
	},[]);

	
	return(
		
	<div class="row row-cols-1 row-cols-md-3 g-5" style={{ position: "absolute",top:"30%"}}>
			{
				arr.map((item,index) =>{
					return(
						<div class="col" key={index}  onClick={() =>{send(index)}}>
    						<div class="card" >
								<img src={item.img} class="card-img-top" alt="..."/>
  								<div class="card-body">
        							<h5 class="card-title">שם המפלגה : {item.name}</h5>
        							<p class="card-text"> מס ההצבעות לשעה זו : {item.NumberOfVotes}</p>
      							</div>
    						</div>
  						</div>
						)
						}
						)
			}
			
	</div>
	)
}

export default HomePage