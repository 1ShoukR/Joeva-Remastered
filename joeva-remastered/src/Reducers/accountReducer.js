const initialState = {
    account: [],
    loggedIn: false,
}




const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ACCOUNT":
            return {
                ...state,
                account: action.payload
            }
        case "SET_LOGGEDIN":
            return {
                ...state,
                loggedIn: action.payload
            }
        default:
            return state
    }
}

export default accountReducer