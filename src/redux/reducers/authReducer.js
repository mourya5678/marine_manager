import { createSlice } from "@reduxjs/toolkit";
import {
    userSignUp,
    userLogin,
    userForgotPassword,
    getBussinessProfileData,
    updateBussinessProfile,
    getDashboardData,
    updateBussinessImage
} from "../actions/authActions";

const initialState = {
    isLoading: false,
    isToggle: false,
    bussiness_profile: [],
    dashBoardData: {},
    fcm: ''
};

export const authSlice = createSlice({
    name: "Auth",
    initialState: initialState,
    reducers: {
        saveFcmToken: (state, acton) => {
            state.fcm = acton?.payload;
        },
    },
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

        // getDashboardData
        builder.addCase(getDashboardData.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getDashboardData.fulfilled, (state, action) => {
            const { data } = action?.payload || {};
            state.dashBoardData = data ?? {};
            state.isLoading = false;
        });
        builder.addCase(getDashboardData.rejected, (state, action) => {
            state.isLoading = false;
        });

        // updateBussinessImage
        builder.addCase(updateBussinessImage.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(updateBussinessImage.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(updateBussinessImage.rejected, (state, action) => {
            state.isLoading = false;
        });
    },
});


export const { saveFcmToken } = authSlice.actions;
export default authSlice.reducer;