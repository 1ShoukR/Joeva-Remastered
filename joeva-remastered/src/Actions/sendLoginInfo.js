import axios from "axios";

export const sendLoginInfo = (dispatch, e) => {
	e.preventDefault();
	let input = {
		username: e.target.form[0].value,
		password: e.target.form[1].value,
	};
    axios
	.post('/user', input)
	.then(function (response) {
	console.log(response);
})
	.catch(function (error) {
	console.log(error);
});
};


