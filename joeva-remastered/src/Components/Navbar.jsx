import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import "../CSS/navContainer.css"




// lets make two different divs. Links and logo on the left, and 
// a create account/login buttons on the right. make it where
// when someone logs in, their name displays as 'Welcome ${User's Name}' with a sign out button.

const Navbar = () => {
  // make ternary for globalAccountData
  const globalAccountData = useSelector((state) => state.account.account)
  console.log("This is accountData Global", globalAccountData)
  return (
    <nav className="navContainer">
      <div className="links">
        <Link to="/"><p>Home</p></Link>
        <Link to="/create_account"><p>Create Account</p></Link>
        <Link to="/login"><p>Login</p></Link>
        <Link to="/computer_products"><p>Computer Products</p></Link>
        <Link to="/boujiee_clothes"><p>Boujiee Clothes</p></Link>
      </div>
    </nav> 

);
};

export default Navbar;
