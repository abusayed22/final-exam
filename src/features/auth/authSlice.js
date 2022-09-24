import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    accessToken: '',
    user: {}
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLogged:  (state, {payload}) => {
            console.log(payload)
            state.accessToken = payload?.accessToken;
            state.user = payload?.user;
        },
        logout:  (state) => {
            state.accessToken = undefined;
            state.user = undefined;
        }
    }
})
export const {userLogged, logout} = authSlice.actions;
export default authSlice.reducer