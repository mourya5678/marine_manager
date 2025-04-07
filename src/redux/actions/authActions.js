import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_REQUEST } from ".";
import { pipSetAccessToken } from "../../auth/Pip";
import {
    loginEndPointURL,
    signupEndPointURL,
    forgotPasswordEndPointURL,
    bussinessProfileEndPointURL,
    updateBussinessProfileEndPointURL,
    getDashboardDataEndPointURL,
    deleteImageEndPointURL,
    notificationEndPointURL,
    getAllSubscriptionPlansEndPoitnURL,
    getMySubscriptionPlansEndPoitnURL,
    cancelSubscriptionPlansEndPointURL,
    getSubscriptionHistoryEndPointURL,
    purchaseNewSubscriptionPlanEndPointURL,
    upgradeSubscriptionPlanEndPointURL,
} from "../../routes/BackendRoutes";

export const userSignUp = createAsyncThunk("auth-signup", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: signupEndPointURL,
            method: "POST",
            data: payload,
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    };
});

export const userLogin = createAsyncThunk("auth-login", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: loginEndPointURL,
            method: "POST",
            data: payload,
        });
        pipSetAccessToken(response?.data?.token);
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    };
});

export const userForgotPassword = createAsyncThunk("auth-forgot-password", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: forgotPasswordEndPointURL,
            method: "POST",
            data: payload,
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    };
});

export const getBussinessProfileData = createAsyncThunk("get-profile", async (props) => {
    try {
        const response = await API_REQUEST({
            url: bussinessProfileEndPointURL,
            method: "GET",
            isErrorToast: false
        });
        return response;
    } catch (error) {
        console.log(error)
    };
});

export const updateBussinessProfile = createAsyncThunk("update-profile", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: updateBussinessProfileEndPointURL,
            method: "POST",
            data: payload,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    };
});

export const getDashboardData = createAsyncThunk("dashboard-data", async () => {
    try {
        const response = await API_REQUEST({
            url: getDashboardDataEndPointURL,
            method: "GET",
            isErrorToast: false
        });
        return response;
    } catch (error) {
        console.log(error)
    };
});

export const updateBussinessImage = createAsyncThunk("update-img", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: deleteImageEndPointURL + `/${payload}`,
            method: "DELETE",
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    };
});

export const getNotificationData = createAsyncThunk("notification-data", async () => {
    try {
        const response = await API_REQUEST({
            url: notificationEndPointURL,
            method: "GET",
            isErrorToast: false
        });
        return response;
    } catch (error) {
        console.log(error)
    };
});

export const getAllSubscriptionPlan = createAsyncThunk("get-plan", async () => {
    try {
        const response = await API_REQUEST({
            url: getAllSubscriptionPlansEndPoitnURL,
            method: "GET",
            isErrorToast: false
        });
        return response;
    } catch (error) {
        console.log(error)
    };
});

export const getUserSubscriptionPlan = createAsyncThunk("get-user-plan", async () => {
    try {
        const response = await API_REQUEST({
            url: getMySubscriptionPlansEndPoitnURL,
            method: "GET",
            isErrorToast: false
        });
        return response;
    } catch (error) {
        console.log(error)
    };
});

export const cancelSubscriptionPlan = createAsyncThunk("cancel-subscription", async (props) => {
    const { callback } = props;
    try {
        const response = await API_REQUEST({
            url: cancelSubscriptionPlansEndPointURL,
            method: "POST",
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    };
});

export const getSubscriptionPlanHistory = createAsyncThunk("get-history-plan", async () => {
    try {
        const response = await API_REQUEST({
            url: getSubscriptionHistoryEndPointURL,
            method: "GET",
            isErrorToast: false
        });
        return response;
    } catch (error) {
        console.log(error)
    };
});

export const purchaseSubscriptionPlan = createAsyncThunk("purchase-subscription", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: purchaseNewSubscriptionPlanEndPointURL,
            method: "POST",
            data: payload
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    };
});

export const upgradeSubscriptionPlan = createAsyncThunk("upgrade-subscription", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: upgradeSubscriptionPlanEndPointURL,
            method: "POST",
            data: payload
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    };
});