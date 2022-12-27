import React from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import CreateAccount from "./CreateAccount";
import Homepage from "./Homepage";


const ReduxRoutes = () => {
    const location = useLocation();
  return (
<div>
  <Routes location={location} key={location.pathname}>
    <Route path="/" element={<Homepage />}/>
    <Route path="/create_account" element={<CreateAccount />}/>
  </Routes>
</div>
)};

export default ReduxRoutes;
