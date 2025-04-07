import { createSlice } from "@reduxjs/toolkit";
import {
    userSignUp,
    userLogin,
    userForgotPassword,
    getBussinessProfileData,
    updateBussinessProfile,
    getDashboardData,
    updateBussinessImage,
    getNotificationData,
    getAllSubscriptionPlan,
    getUserSubscriptionPlan,
    cancelSubscriptionPlan,
    getSubscriptionPlanHistory,
    purchaseSubscriptionPlan
} from "../actions/authActions";

const initialState = {
    isLoading: false,
    isToggle: false,
    bussiness_profile: [],
    dashBoardData: {},
    fcm: '',
    notificationData: [],
    subscriptionPlane: [],
    userSubscriptionPlane: [],
    subscriptionPlanHistory: []
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

        // getNotificationData
        builder.addCase(getNotificationData.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getNotificationData.fulfilled, (state, action) => {
            const { data } = action?.payload || [];
            state.notificationData = data?.notifications ?? [];
            state.isLoading = false;
        });
        builder.addCase(getNotificationData.rejected, (state, action) => {
            state.isLoading = false;
        });

        // getAllSubscriptionPlan
        builder.addCase(getAllSubscriptionPlan.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getAllSubscriptionPlan.fulfilled, (state, action) => {
            const { data } = action?.payload || [];
            state.subscriptionPlane = data ?? [];
            state.isLoading = false;
        });
        builder.addCase(getAllSubscriptionPlan.rejected, (state, action) => {
            state.isLoading = false;
        });

        // getUserSubscriptionPlan
        builder.addCase(getUserSubscriptionPlan.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getUserSubscriptionPlan.fulfilled, (state, action) => {
            const { data } = action?.payload || [];
            state.userSubscriptionPlane = data ?? [];
            state.isLoading = false;
        });
        builder.addCase(getUserSubscriptionPlan.rejected, (state, action) => {
            state.isLoading = false;
        });

        // cancelSubscriptionPlan
        builder.addCase(cancelSubscriptionPlan.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(cancelSubscriptionPlan.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(cancelSubscriptionPlan.rejected, (state, action) => {
            state.isLoading = false;
        });

        // getSubscriptionPlanHistory
        builder.addCase(getSubscriptionPlanHistory.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getSubscriptionPlanHistory.fulfilled, (state, action) => {
            const { data } = action?.payload || [];
            state.subscriptionPlanHistory = data ?? [];
            state.isLoading = false;
        });
        builder.addCase(getSubscriptionPlanHistory.rejected, (state, action) => {
            state.isLoading = false;
        });

        // purchaseSubscriptionPlan
        builder.addCase(purchaseSubscriptionPlan.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(purchaseSubscriptionPlan.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(purchaseSubscriptionPlan.rejected, (state, action) => {
            state.isLoading = false;
        });
    },
});


export const { saveFcmToken } = authSlice.actions;
export default authSlice.reducer;