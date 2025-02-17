import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        user: null,
        isAuthenticated: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.user= action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated= action.payload;
        },
        
        logout: (state) => {
            state.token = null;
            state.user = null;
            state.isAuthenticated = false
        },
    },
});

export const { setToken,setUser, setIsAuthenticated,logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
