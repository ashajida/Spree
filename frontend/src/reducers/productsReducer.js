import {FETCH_PRODUCTS, FETCH_LOADING} from '../actions/types';

const initialState = {
  products: [],
  isLoading: true
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS:
        return {
          ...state,
          products: action.payload
      }
      case FETCH_LOADING:
        return {
          ...state,
          isLoading: action.payload
      }
      default:
        return state
    }
}

export default productsReducer;
