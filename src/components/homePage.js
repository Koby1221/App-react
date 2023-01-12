import React, { useEffect, useState } from "react";
import {  Link ,useNavigate} from "react-router-dom";
import "../css/homePage.css"
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
		//  change();
		doSearchApi();
	},[]);

	
	return(
		<div id="divv">
			<h1>welcome to server </h1>
			{
				arr.map((item,index) =>{
					return(
						// <div key={index} >
						// 	<button  onClick={() =>{send(index)}}>
						// 	<img className="img" src={item.img}></img></button>
						// 	</div>

						// 
						
						
						// <div>
						// <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
						// <h1>Card Image with description on :hover</h1>
						// <div class="cards">
  						// <div class="card">
    					// <h2 class="card-title">Seal</h2>
    					// < img src="https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt=""/>
    					// <p class="card-desc">Pinnipeds, commonly known as seals,[a] are a widely distributed and diverse clade of carnivorous, fin-footed, semiaquatic marine mammals. They comprise the extant families Odobenidae (whose only living member is the walrus), Otariidae (the eared seals: sea lions and fur seals), and Phocidae (the earless seals, or true seals).</p>
  						// </div>
  						// </div>
						// </div> <div className="col-lg-6  p-3" key={item.dt}>
						
						
						<div className="p-2 shadow overflow-hidden" key={index}>
						<h2> date : bffdbfdb</h2>
						<div><h3 >temp :  vdsvdsvdsvs</h3> </div> 
						<h2>description : fvdfsvdsvds</h2>
						<img src={item.img} style={{width:"30%"}}></img>
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