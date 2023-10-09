import {
  INCREMENT_,
  DECREMENT_,
  DELETE_ITEM_,
  EMPTY_CART_,

} from "./Action";


const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};


const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_:
      const existingProduct = state.items.find((item) => item.id === action.payload.id);
      console.log("existingProduct:", existingProduct);

      if (existingProduct) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item

          ),
          totalItems: state.totalItems + 1,
        }
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          totalItems: state.totalItems + 1,
        };
      }
    case DELETE_ITEM_:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        totalItems: state.totalItems - 1,
      };

    case DECREMENT_:
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

      // Remove the item from the cart if its quantity is zero
      const filteredItems = updatedItems.filter((item) => item.quantity > 0);

      return {
        ...state,
        items: filteredItems,
        totalItems: filteredItems.reduce((total, item) => total + item.quantity, 0),
      };

    case EMPTY_CART_:
      return {
        ...state,
        items: [],
        totalItems: 0,
        totalPrice: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;