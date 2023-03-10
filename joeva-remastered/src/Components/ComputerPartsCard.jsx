import React from "react";
import { addToCart } from "../Actions/addToCart";
import "../CSS/computerPartsCard.css"


export const ComputerPartsCard = (props) => {
    console.log("This is props", props)
  return (
    <div className="computerPartsCardContainer">
        <div className="computerPartsCardName">
            <p>{props?.item?.name}</p>
        </div>
        <div className="computerPartsCardImageContainer">
            <img className="pcPartImage" src={props.item.image} alt="" />
        </div>
        <div className="computerPartsCardPrice">
            <p>{props?.item?.price}</p>
        </div>
        <div>
            <p>{props?.item?.description}</p>
        </div>
        <div>
            <p>{props?.item?.reviews}</p>
        </div>
        <div>
            <button value={props?.item?.id} onClick={(e) => addToCart(e)}>Add to cart</button>
        </div>
    </div>
  );
};
