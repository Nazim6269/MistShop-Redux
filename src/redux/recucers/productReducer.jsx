//internal imports
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_PRODUCT,
  SELECTED_PRODUCT,
  SET_PRODUCTS,
} from "../constants/actionsTypes";

//code starts from here
const initialState = {
  product: [],
  cart: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, action) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return {
        ...state,
        ...action.payload,
      };
    case REMOVE_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const addToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      console.log(action.payload);
      return {
        cart: state.cart.filter((product) => product.id !== action.payload),
      };
    default:
      return state;
  }
};
