import { createSlice } from "@reduxjs/toolkit";
import {
    userSignUp,
    userLogin,
    userForgotPassword,
    getBussinessProfileData,
    updateBussinessProfile
} from "../actions/authActions";

const initialState = {
    isLoading: false,
    isToggle: false,
    bussiness_profile: [],
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

        // getBussinessProfileData
        builder.addCase(getBussinessProfileData.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getBussinessProfileData.fulfilled, (state, action) => {
            const { data } = action?.payload || [];
            state.bussiness_profile = data ?? [];
            state.isLoading = false;
        });
        builder.addCase(getBussinessProfileData.rejected, (state, action) => {
            state.isLoading = false;
        });

        // updateBussinessProfile
        builder.addCase(updateBussinessProfile.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(updateBussinessProfile.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(updateBussinessProfile.rejected, (state, action) => {
            state.isLoading = false;
        });
    },
});

export default authSlice.reducer;