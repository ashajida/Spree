import { 
     ADD_TO_CART,
     DECREMENT_PRODUCT_QUANTITY, 
     REMOVE_FROM_CART, 
     FETCH_LOADING, 
     INCREMENT_PRODUCT_QUANTITY, 
     INCREMENT_CART_COUNTER, 
     INCREMENT_TOTAL_PRICE, 
     DECREMENT_TOTAL_PRICE, 
     DECREMENT_CART_COUNTER 
} from './types';

export const addToCart = (dispatch, payload) => {
    const products = localStorage.getItem('cart');
    dispatch(incrementCartCounter(payload));

    if(products === null) {
        const productArr = [ payload ];
        localStorage.setItem('cart', JSON.stringify(productArr));
        
        return {
            type: ADD_TO_CART,
            payload
        };
    }

    const prods = JSON.parse(products);
      
    if(JSON.parse(products).length >= 0) {
        const arr = JSON.parse( products );
        localStorage.setItem('cart', JSON.stringify( arr.concat(payload)));

        return {
            type: ADD_TO_CART,
            payload: payload
        };
        
    }

   
    
}

export const removeFromCart = (dispatch, payload) => {
    dispatch(decrementCartCounter());

    return {
        type: REMOVE_FROM_CART,
        payload
    };
}


export const fetchLoading = data => {
    return {
        type: FETCH_LOADING,
        payload: data
    }
}

export const incrementCartCounter = (payload) => {
    return {
        type: INCREMENT_CART_COUNTER,
        payload,
    }
}

export const decrementCartCounter = () => {
    return {
        type: DECREMENT_CART_COUNTER
    }
}

export const incrementCartTotal = (payload) => {
    return {
        type: INCREMENT_TOTAL_PRICE,
        payload: payload
    }
}

const updateLocalStorage = (payload, type) => {
    const productsList = localStorage.getItem('cart') || null;
    const products = JSON.parse(productsList);
    let updatedProducts;
    
    if(type == 'increment') {
        updatedProducts = products.map(product => {
            if(product.id == payload.id) {
                product.quantity = product.quantity + 1;
            }
            return product;
        })
    }

    if(type == 'decrement') {
        updatedProducts = products.map(product => {
            if(product.id == payload.id) {
                product.quantity = product.quantity - 1;
            }
            return product;
        })
    }

    localStorage.setItem('cart', JSON.stringify(updatedProducts));
}

export const decrementCartTotal = (payload) => {
    return {
        type: DECREMENT_TOTAL_PRICE,
        payload: payload
    }
}

export const incrementProductQuantity = (dispatch, payload) => {
    updateLocalStorage(payload, 'increment');
    dispatch(incrementCartTotal(payload.price));

    return {
        type: INCREMENT_PRODUCT_QUANTITY,
        payload: payload
    }
}


export const decrementProductQuantity = (dispatch, payload) => {
    updateLocalStorage(payload, 'decrement');
    dispatch(decrementCartTotal(payload.price));
    
    return {
        type: DECREMENT_PRODUCT_QUANTITY,
        payload: payload
    }
}