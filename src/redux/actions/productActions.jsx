//internal imports
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_PRODUCT,
  SELECTED_PRODUCT,
  SET_PRODUCTS,
} from "../constants/actionsTypes";

//code starts from here
export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeProduct = () => {
  return {
    type: REMOVE_PRODUCT,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};
