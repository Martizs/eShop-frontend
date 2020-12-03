import axios from "axios";
import { toast } from "react-toastify";
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
export function apiCall(
  type,
  endpoint,
  data,
  prot,
  successCallback,
  errorCallback
) {
  const axiosCall = type === "post" ? axios.post : axios.get;

  const reqData = type === "post" ? data : { params: data };

  successCallback([]);

  // axiosCall(`/api/${endpoint}`, reqData || {})
  //   .then((response) => {
  //     console.log("response", response);
  //     successCallback([]);
  //   })
  //   .catch((error) => {
  //     console.log("error", error);
  //     successCallback([]);
  //   });

  axiosCall(`/api/${endpoint}`, reqData || {})
    .then((response) => {
      if (prot && response.data.error) {
        store.dispatch(setLogin(false));
      } else {
        successCallback(response.data);
      }
    })
    .catch((error) => {
      if (!!errorCallback) {
        errorCallback(error.response.data.msg);
      }

      toast.error("Įvyko klaida, pabandykite perkrauti puslapį");
      console.log("error:", error.response.data.msg);
    });
}
