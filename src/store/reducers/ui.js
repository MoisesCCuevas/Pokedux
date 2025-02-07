import { fromJS } from "immutable";
import { SET_LOADING } from "@Actions/types";

const initialState = fromJS({
  loading: false
});

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return state.setIn(["loading"], action.payload);
      // return {
      //   ...state,
      //   loading: action.payload,
      // };
    default:
      return state;
  }
}
