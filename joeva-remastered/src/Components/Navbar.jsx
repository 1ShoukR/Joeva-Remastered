import React from "react";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  return (
<>
    <nav>
        <Link to="/"><p>Home</p></Link>
        <Link to="/create_account"><p>Create Account</p></Link>
    </nav> 
</>
  );
};

export default Navbar;
