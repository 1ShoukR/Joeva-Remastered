import React from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import { BoujieeClothes } from "./BoujieeClothes";
import ComputerParts from "./ComputerParts";
import CreateAccount from "./CreateAccount";
import Homepage from "./Homepage";
import { Login } from "./Login";


const ReduxRoutes = () => {
    const location = useLocation();
  return (
		<div>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Homepage />} />
				<Route path="/create_account" element={<CreateAccount />} />
				<Route path="/computer_products" element={<ComputerParts />} />
				<Route path="/boujiee_clothes" element={<BoujieeClothes />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);};

export default ReduxRoutes;
