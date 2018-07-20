import React from "react";
import "./ColorCard.css";

const ColorCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <span onClick={() => props.removeColor(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default ColorCard;
