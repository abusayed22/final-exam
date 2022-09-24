import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../api/apiSlice";
import authSlice from "../auth/authSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice
    },
    devTools: process.env.REACT_API_APP_URL !== "production",
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware)
})
export default store;