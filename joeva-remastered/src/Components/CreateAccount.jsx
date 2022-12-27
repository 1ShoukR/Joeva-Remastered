import React from "react";
import "../CSS/createAccount.css"

const CreateAccount = () => {
  return (
    <div className="wrapper">
        <div className="createAccountTitle">
            <h1>Create Your Account Here!</h1>
        </div>
        <div className="formTopDiv">
            <form action="">
                <div className="username">
                    <h4>Username</h4>
                </div>
                <div className="usernameInputBtn">
                    <input type="username" placeholder="username" />
                </div>
                <div className="password">
                    <h4>Password</h4>
                </div>
                <div className="passwordInputBtn">
                    <input type="password" placeholder="password" />
                </div>
                <div className="submitBtn">
                    <button>submit</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default CreateAccount;
