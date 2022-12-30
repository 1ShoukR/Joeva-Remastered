import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import computerPartsReducer from './computerPartsReducer';
import boujieeClothesReducer from './boujieeClothesReducer';




const rootReducer = combineReducers({
    account: accountReducer,
    pcParts: computerPartsReducer,
    clothes: boujieeClothesReducer
})


export default rootReducer
