import axios from "axios"


export const getBoujieeClothes = (dispatch) => {
    axios
    .get('http://127.0.0.1:5000/get-boujiee-clothes')
    .then(function (response) {
        console.log(response);
        dispatch({ type: 'SET_CLOTHES', payload: response.data });
    })
    .catch(function (error) {
        console.log(error);
    }); 
}