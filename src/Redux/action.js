import {
  FETCH_START,
  FETCH_LIST,
  FETCH_FAIL,
  PRODUCT_FILTER
} from "./constants";

export const fetch_start = () => {
  return {
    type: FETCH_START
  };
};

export const fetch_list = (data) => {
  return {
    type: FETCH_LIST,
    lists: data
  };
};

export const fetch_fail = (error) => {
  return {
    type: FETCH_FAIL,
    error
  };
};

export const productFilter = (filter) => {
  return {
    type: PRODUCT_FILTER,
    filter
  };
};
