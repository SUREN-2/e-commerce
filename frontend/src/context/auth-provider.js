import { createContext, useContext, useLayoutEffect, useEffect, useState } from "react";
import { API } from "../lib/axios-client";
import { useDispatch, useSelector } from "react-redux";


import {setToken, logout } from "../store/reducers/authSlice";
import useAuth from "../hooks/api/use-auth";
import { Navigate } from "react-router-dom";



const AuthContext = createContext(undefined);



export const AuthProvider = ({ children }) => {

    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    

    // useEffect(() => {
    //     const fetchMe = async () => {
    //         try {
    //             const response = await API.get('/user/current');
    //             // dispatch(setToken(response.data.accessToken));
    //         } catch (error) {
    //             dispatch(logout());
    //             // Navigate('/')
    //             // window.location.href = "/";
    //         }
    //     }

    //     fetchMe();
    // }, [])

    useLayoutEffect(() => {

        const authInterceptor = API.interceptors.request.use((config) => {
            config.headers.Authorization = !config._retry && token ?
                `Bearer ${token}`
                : config.headers.Authorization

            return config
        }
        )

        return () => {
            API.interceptors.request.eject(authInterceptor)
        }

    }, [token])


    useLayoutEffect(() => {
        const refreshInterceptor = API.interceptors.response.use((response) => response,
            async (error) => {

                const originalRequest = error.config;
                console.log(` Eroor @ ${error}`)

                if (error.response.status == "403" && error.response.data.message == "UnAuthorized") {
                    console.log('refresh')
                    try {
                        const response = await API.get("auth/refreshToken")
                        dispatch(setToken(response.data.accessToken))

                        originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`
                        originalRequest._retry = true

                        return API(originalRequest)
                    } catch (error) {
                        dispatch(logout())
                    }
                }
                return Promise.reject(error)
            })

        return () => {  
            API.interceptors.response.eject(refreshInterceptor)
        }

    }, [])


    const {
        data: authData,
        error,
        isLoading,
        isFetching,
        refetch,
      } = useAuth(token ? {} : null)
      const user = authData?.user;
    
      console.log(`new ${authData}`)

    return (
         <AuthContext.Provider value={{ user, error, isLoading, isFetching, refetch }}>{children}</AuthContext.Provider>
    );
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useCurrentUserContext must be used within a AuthProvider");
    }
    return context;
  };


