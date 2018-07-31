import React from "react";
import "./ColorCard.css";

const ColorCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <span onClick={() => props.removeColor(props.click)} className="remove" data-click={props.click}>
      O
    </span>
  </div>
);

export default ColorCard;
