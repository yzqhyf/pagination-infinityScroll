import { fetch_start, fetch_list, fetch_fail } from "../Redux/action";
import data from "./data.json";

export const fetchProduct = () => {
  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  };
  return async (dispatch) => {
    try {
      dispatch(fetch_start());
      let response = await fetchData();
      dispatch(fetch_list(response));
    } catch (err) {
      dispatch(fetch_fail(err));
    }
  };
};

export const fetch_Product = () => {
  return async (dispatch) => {
    try {
      dispatch(fetch_start());
      let response = await fetchData();
      dispatch(fetch_list(response));
    } catch (err) {
      dispatch(fetch_fail(err));
    }
  };
};

// export const fetch_product=()=> {
//   return async dispatch=> {
//       try {
//           dispatch(fetch_product_start());
//           let response=await new Promise((resolve, reject)=>{
//               setTimeout(()=> {
//                   resolve(data);
//               }, 1000);
//           });
//           dispatch(fetch_product_list(response));
//       }catch(error) {
//           dispatch(fetch_product_fail(error));
//       }
//   };
// };

export const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};
