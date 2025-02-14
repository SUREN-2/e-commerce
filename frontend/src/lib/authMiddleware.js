// import { API } from "../lib/axios-client";
// import { setToken, logout } from "./authSlice"; // Redux actions

// const authMiddleware = (store) => (next) => (action) => {
//     const token = store.getState().auth.token;

//     // Attach request interceptor (set token in headers)
//     API.interceptors.request.use((config) => {
//         config.headers.Authorization = !config._retry && token ?
//             `Bearer ${token}`
//             : config.headers.Authorization

//         return config
//     });

//     // Attach response interceptor (handle token expiration)
//     API.interceptors.response.use(
//         (response) => response,
//         async (error) => {
//             const originalRequest = error.config;

//             if (error.response?.status === 403 && error.response.data.message === "UnAuthorized" && !originalRequest._retry) {
//                 originalRequest._retry = true;

//                 try {
//                     const response = await API.get("/refreshToken");
//                     store.dispatch(setToken(response.data.accessToken));
//                     originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;

//                     return API(originalRequest); // Retry request with new token
//                 } catch (error) {
//                     store.dispatch(logout()); // Logout if refresh fails
//                 }
//             }
//             return Promise.reject(error);
//         }
//     );

//     return next(action);
// };

// export default authMiddleware;
