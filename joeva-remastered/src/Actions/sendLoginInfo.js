import axios from "axios";

export const sendLoginInfo = (dispatch, e) => {
	e.preventDefault();
	let input = {
		username: e.target.form[0].value,
		password: e.target.form[1].value,
	};
    axios
	.post('http://127.0.0.1:5000/login-confirm', input)
	.then(function (response) {
	console.log(response);
    dispatch({ type: 'SET_ACCOUNT' , payload: response.data});
    dispatch({ type: 'SET_LOGGEDIN', payload: true });
})
	.catch(function (error) {
	console.log(error);
});
};


