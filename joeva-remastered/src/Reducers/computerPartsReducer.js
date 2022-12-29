const initialState = {
    computerParts: []
}


const computerPartsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PC_PARTS":
            return {
                ...state,
                computerParts: action.payload
            }
        default:
            return state
    }
}

export default computerPartsReducer