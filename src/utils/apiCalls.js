import axios from "axios";
/* redux */
import store from "redux_store/store";
import { setLogin } from "redux_store/general/actions";

// here currently
// type can be 'get' or 'post'
// endpoint is the name of the endpoint we're calling
// without any slashes(/) and without the 'api' in it
// data can be null if its a get with no params or it can
// have the data required for the api call
// prot - variable is to indicate if a protected route is being accessed
// if we get an error call when the user access the protected route
// we log them out in the frontend
export function apiCall(type, endpoint, data, prot, successCallback) {
  const axiosCall = type === "post" ? axios.post : axios.get;

  axiosCall(`/api/${endpoint}`, data || {})
    .then((response) => successCallback(response.data))
    .catch((error) => {
      // 401 we shoot out for not authenticated error
      if (prot && error.response.status === 401) {
        store.dispatch(setLogin(false));
      }
      console.log(
        "error:",
        error.response.data.msg,
        "with endpoint:",
        endpoint,
        "call_type:",
        type,
        "data:",
        data
      );
    });
}
