//state yönetimini yapıldıgı yer :reducer

import * as actionTypes from "../actions/actionsTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const addedItem = state.find(
        (c) => c.product.id === action.payload.product.id
      ); // daha önce sepette var mı

      if (addedItem) {
        const newState = state.map((cartItem) => {
          if (cartItem.product.id === addedItem.product.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
          }
          return cartItem;
        });
        return newState;
      } else {
        return [
          ...state,  //state in bir kopyyasını al 
          {
            ...action.payload
          },
        ];
      }

    default:
      return state;
  }
}
