import React from "react";
import "./PlanetCard.css";

const PlanetCard = props =>(
  <div className = "card">
    <div className = "img-container">
      <img id = {props.id} onClick = {props.playGame} alt = {props.name} src ={props.image}/>
    </div>
  </div>
);

export default PlanetCard;
