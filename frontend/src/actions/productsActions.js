import {FETCH_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, FETCH_LOADING} from './types';
import WoocommerceApi from '../woocommerce-api/index';

const api = new WoocommerceApi();
const cachedProductList = localStorage.getItem('productList');

export const fetchProducts = () => (dispatch) =>  {
    dispatch(fetchLoading(true));

    if(cachedProductList !== null) {
        dispatch(fetchLoading(false));
        return dispatch({
            type: FETCH_PRODUCTS,
            payload: JSON.parse(cachedProductList)
        })
    }

    return api.getAllProducts()
    .then((response) => {
        dispatch(fetchLoading(false));
        localStorage.setItem('productList', JSON.stringify(response.data));

        return dispatch({
            type: FETCH_PRODUCTS,
            payload: response.data
        })
    })
    .catch((error) => {
        dispatch(fetchLoading(false));
        dispatch({
            type: FETCH_LOADING,
            payload: true
        });
    });
    
}

export const fetchLoading = data => {
    return {
        type: FETCH_LOADING,
        payload: data
    }
}


