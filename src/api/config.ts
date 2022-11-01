import axios from "axios";
// import { addNotification } from "redux/actions/notifications";
// import store from "redux/store";
// import { isLogged, getToken } from "utils";

const baseURL = process.env.REACT_APP_BASE_URL;

console.log(baseURL);


const api = axios.create({ baseURL });

// const errorHandler = (error) => {
//   store.dispatch(addNotification({
//     color: 'error',
//     icon: 'warning',
//     title: 'API Error',
//     content: error.message,
//     dateTime: Date.now(),
//   }))
// }

// api.interceptors.request.use((request) => {
//     const headers = { 'Cache-Control': 'no-cache', 'Content-Type': 'application/json' };
//     const newRequest = { ...request, headers };
//     return newRequest;
  
// });


// api.interceptors.response.use(null, errorHandler)

export { api };