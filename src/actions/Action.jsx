export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (product, index) => {
  return {
    type: ADD_TO_CART,
    payload: { ...product, index },
  };
};

export const updateCartItem = (index, quantity) => ({
  type: UPDATE_CART_ITEM,
  payload: { index, quantity },
});

export const removeFromCart = (index) => ({
  type: REMOVE_FROM_CART,
  payload: index,
});

