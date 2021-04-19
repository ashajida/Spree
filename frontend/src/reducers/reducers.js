import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
});

export default rootReducer;