import React, {useState} from "react";
import "/workspaces/Traffic-Light/src/styles/index.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [luzActiva, setLuzActiva] = useState("");

	const handleLightClick = (color) => {
		setLuzActiva(color);
	};
  
	return (
	  <div className="traffic-light">
		<div
		  className={"light red "+(luzActiva === "red" ? "activa" : "")}
		  onClick={() => handleLightClick('red')}
		/>
		<div
		  className={"light yellow "+(luzActiva === "yellow" ? "activa" : "")}
		  onClick={() => handleLightClick("yellow")}
		/>
		<div
		  className={"light green "+(luzActiva === "greeb" ? "activa" : "")}
		  onClick={() => handleLightClick("green")}
		/>
	  </div>
	);
  };

export default Home;
