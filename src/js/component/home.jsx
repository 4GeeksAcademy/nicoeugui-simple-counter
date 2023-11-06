import React from "react";
import SecondsCounter from "./secondsCounter";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<SecondsCounter/>
		</div>
	);
};



export default Home;
