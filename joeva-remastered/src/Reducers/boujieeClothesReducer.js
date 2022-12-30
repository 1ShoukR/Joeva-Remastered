const initialState = {
    boujieeClothes: []
}


const boujieeClothesReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_CLOTHES":
            return {
                ...state,
                boujieeClothes: action.payload
            }
        default:
            return state
    }
}




export default boujieeClothesReducer