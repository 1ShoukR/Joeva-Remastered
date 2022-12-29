import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import computerPartsReducer from './computerPartsReducer';




const rootReducer = combineReducers({
    account: accountReducer,
    pcParts: computerPartsReducer
})


export default rootReducer
