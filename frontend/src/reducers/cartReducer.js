import {
    ADD_TO_CART,
    DECREMENT_PRODUCT_QUANTITY, 
    INCREMENT_PRODUCT_QUANTITY, 
    DECREMENT_CART_COUNTER, 
    INCREMENT_CART_COUNTER, 
    INCREMENT_TOTAL_PRICE, 
    DECREMENT_TOTAL_PRICE, 
    REMOVE_FROM_CART,
} from '../actions/types';

const initialState = {
  items: [],
  count: 0,
  totalPrice: 0,
};

const cartReducer = (state = initialState, action ) => {
    switch (action.type) {
        case ADD_TO_CART:
          return {
            ...state,
            items: (() => {
                if(state.items.some((item) => item.id == action.payload.id )) {
                   return state.items.map((item) => {
                        if(item.id == action.payload.id) {
                            return {...item, quantity: item.quantity + action.payload.quantity};
                        }
                        return item;
                    })
                }

                 return  [...state.items, action.payload];
            })(),
          }

        case INCREMENT_CART_COUNTER:
            return {
                ...state,
                count: (() => {
                    if(!state.items.some((item) => item.id == action.payload.id)) {
                        return state.count + 1;
                    } 
                    return state.count;
                })()
            }
        case DECREMENT_CART_COUNTER:
            return {
                ...state,
                count: state.count - 1
            }
        case INCREMENT_TOTAL_PRICE:
                let total = parseInt(state.totalPrice) + parseInt(action.payload);
                return {
                    ...state,
                    totalPrice: total
                }
        case DECREMENT_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: state.totalPrice - action.payload
            }
        case INCREMENT_PRODUCT_QUANTITY:
             return {
                ...state,
                items: state.items.map((item) => {
                    if(item.id == action.payload.id) {
                        return {...item, quantity: action.payload.quantity};
                    }

                    return item;
                })
            }
        case DECREMENT_PRODUCT_QUANTITY:
            return {
                ...state,
                items: state.items.map((item) => {
                    if(item.id == action.payload.id) {
                        return {...item, quantity: action.payload.quantity};
                    }
                    return item;
                })
        }
        case REMOVE_FROM_CART:
            const productTotal = action.payload.quantity * action.payload.price;
            const cartTotal = state.totalPrice -  productTotal;

            return {
                ...state,
                items: state.items.filter(item => {
                    if(item.id !== action.payload.id) return item;
                }),
                totalPrice: cartTotal,
            }
        default:
          return state
      }
}


export default cartReducer;