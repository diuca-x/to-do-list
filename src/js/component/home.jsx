import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Form from "./form";
import List from "./list";
//create your first component
const Home = () => {
	const [list, setList] = useState([])
	return (
		<div className="container">
			<div className="row justify-content-center mt-5">
				<div className="col d-flex justify-content-center">
					<h1>Todo</h1>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col d-flex justify-content-center">					
					<ul className="list-group">
						<Form list = {list} setList= {setList}/>
						<List/>
						<li className="list-group-item"> items left</li>
					</ul>
				</div>				
			</div>
			
		</div>
	);
};

export default Home;
