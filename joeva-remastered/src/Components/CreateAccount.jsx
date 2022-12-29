import React from "react";
import axios from "axios"
import "../CSS/createAccount.css"

const CreateAccount = () => {
    const handleSubmitButton = (e) => {
        e.preventDefault()
        let input = {
					username: e.target.form[0].value,
					password: e.target.form[1].value,
					firstName: e.target.form[2].value,
					lastName: e.target.form[3].value,
					email: e.target.form[4].value,
				};
        axios
        .post('http://127.0.0.1:5000/create-account-confirm', input )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
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
					<div className="FirstName">
						<h4>First Name</h4>
					</div>
					<div className="firstNameInputBtn">
						<input type="firstName" placeholder="Ex: Fred" />
					</div>
					<div className="username">
						<h4>Last Name</h4>
					</div>
					<div className="lastNameInputBtn">
						<input type="lastName" placeholder="Ex: Appleseed" />
					</div>
					<div className="email">
						<h4>Email</h4>
					</div>
					<div className="emailInputBtn">
						<input type="email" placeholder="Ex: Fred Appleseed@gmail.com" />
					</div>
					<div className="submitBtn">
						<button onClick={(e) => handleSubmitButton(e)}>submit</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreateAccount;
