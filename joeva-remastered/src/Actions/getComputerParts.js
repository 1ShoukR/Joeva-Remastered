import axios from 'axios';

export const getComputerParts = (dispatch) => {
	axios
		.get('http://127.0.0.1:5000/get-pc-parts')
		.then(function (response) {
			console.log(response);
			dispatch({ type: 'SET_PC_PARTS', payload: response.data});
		})
		.catch(function (error) {
			console.log(error);
		}); 
};
