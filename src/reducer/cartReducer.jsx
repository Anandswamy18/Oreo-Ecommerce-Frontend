import { ADD_TO_CART, UPDATE_CART_ITEM, REMOVE_FROM_CART } from '../actions/Action';

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingProductIndex = state.cart.findIndex(item => item.index === action.payload.index);
      if (existingProductIndex >= 0) {
        const updatedCart = state.cart.map((item, index) => 
          index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
        return {
          ...state,
          cart: updatedCart,
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }
    case UPDATE_CART_ITEM: {
      const updatedCart = state.cart.map(item =>
        item.index === action.payload.index ? { ...item, quantity: action.payload.quantity } : item
      );
      return {
        ...state,
        cart: updatedCart,
      };
    }
    case REMOVE_FROM_CART: {
      const updatedCart = state.cart.filter(item => item.index !== action.payload);
      return {
        ...state,
        cart: updatedCart,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;

