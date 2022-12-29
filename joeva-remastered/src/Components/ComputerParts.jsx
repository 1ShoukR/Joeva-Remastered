import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComputerParts } from "../Actions/getComputerParts";

const ComputerParts = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    getComputerParts(dispatch)
  }, []);
  const globalPcParts = useSelector((state) => state.pcParts.computerParts)
  console.log(globalPcParts)
  return (
		<div className="computerPartsWrapper">
			<div className="computerPartsHeaderContainer">
				<div className="computerPartsHeader">
					<h2>Computer Products</h2>
				</div>
				<div className="computerPartsDescription">
					<p>Here is our premium computer products at Joeva Inc</p>
				</div>
			</div>
			<div className="computerPartsProductsContainer">
				<div className="computerPartsProductsHeader">
					<h4>products</h4>
				</div>
			</div>
		</div>
	);
};

export default ComputerParts;
