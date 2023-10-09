// cartActionTypes.js
export const INCREMENT_ = 'INCREMENT';
export const DECREMENT_ = 'DECREMENT';
export const DELETE_ITEM_ = 'DELETE_ITEM';
export const EMPTY_CART_ = 'EMPTY_CART';

export const INCREMENT = (product) => {
  return {
    type: INCREMENT_,

    payload: product,
  };
};


export const DECREMENT = (productId, quantity) => {
  return {
    type: DECREMENT_,
    payload: {
      productId,
      quantity,
    },
  };
};

export const DELETE = (productId) => {
  return {
    type: DELETE_ITEM_,

    payload: productId,
  };
};

export const EMPTY = () => ({
  type: EMPTY_CART_,
});
