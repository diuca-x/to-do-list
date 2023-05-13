import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Form from "./form";
import List from "./list";
//create your first component
const Home = () => {
	const [list, setList] = useState([])
	const [maped_list, setMap] = useState([])

	const handleDelete = (itemToDelete) =>
      setList((prevList) =>
        prevList.filter((x) =>x !== itemToDelete)
      );

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
						<Form list = {list} setList= {setList} maped_list = {maped_list} setMap = {setMap} handleDelete={handleDelete}/>
						<List maped_list={maped_list}mn />
						<li className="list-group-item" > {`${maped_list.length} items left`}</li>
					</ul>
				</div>				
			</div>
			
		</div>
	);
};

export default Home;
