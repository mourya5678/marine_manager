import { createSlice } from "@reduxjs/toolkit";
import {
    userSignUp,
    userLogin,
    userForgotPassword
} from "../actions/authActions";

const initialState = {
    isLoading: false,
    isToggle: false,
};

export const authSlice = createSlice({
    name: "Auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        // userSignUp
        builder.addCase(userSignUp.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(userSignUp.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(userSignUp.rejected, (state, action) => {
            state.isLoading = false;
        });
        // userLogin
        builder.addCase(userLogin.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(userLogin.rejected, (state, action) => {
            state.isLoading = false;
        });

        // userForgotPassword
        builder.addCase(userForgotPassword.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(userForgotPassword.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(userForgotPassword.rejected, (state, action) => {
            state.isLoading = false;
        });
    },
});

export default authSlice.reducer;