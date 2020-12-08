import {
  FETCH_START,
  FETCH_LIST,
  FETCH_FAIL,
  PRODUCT_FILTER
} from "./constants";

let initialState = {
  pending: false,
  lists: [],
  error: null,
  filter: "ALL"
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        pending: true
      };
    case FETCH_LIST:
      return {
        ...state,
        pending: false,
        lists: action.lists
      };
    case FETCH_FAIL:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_FILTER:
      return {
        ...state,
        filter: action.filter
      };
    default:
      return state;
  }
};
