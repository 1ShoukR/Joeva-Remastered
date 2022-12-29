import React from "react";
import "../CSS/computerPartsCard.css"


export const ComputerPartsCard = (props) => {
    console.log("This is props", props)
  return (
    <div className="computerPartsCardContainer">
        <div className="computerPartsCardImageContainer">
            <img className="pcPartImage" src={props.item.image} alt="" />
        </div>
        <div className="computerPartsCardName">
            <p>{props?.item?.name}</p>
        </div>
    </div>
  );
};
