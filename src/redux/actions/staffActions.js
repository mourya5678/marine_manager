import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_REQUEST } from ".";
import {
    addStaffEndPointURL,
    getStaffDataEndPointURL,
    getActiveStaffDataEndPointURL,
    updateStaffEndPointURL,
    getSupplierEndPointURL,
    addSupplierEndPointURL,
    addDockDetailsEndPointURL,
    getAllBoatsDataEndPointURL,
    addBoatDetailsEndPointURL,
    getDockDetailsEndPointURL,
    updateDockDetailsEndPointURL,
    getAvailableBoatsEndPointURL,
    updateSupplierEndPointURL,
    updateBoatDetailsEndPointURL,
    getTomorrowTaskEndPointURL,
    assignBoatsToDockEndPointURL,
    getStaffTaskEndPointURL,
    getAllInvoiceDataEndPointURL
} from "../../routes/BackendRoutes";

export const addStaffDetails = createAsyncThunk("add-staff", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: addStaffEndPointURL,
            method: "POST",
            data: payload,
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    }
});

export const getStaffData = createAsyncThunk("get-staff", async (props) => {
    try {
        const response = await API_REQUEST({
            url: getStaffDataEndPointURL,
            method: "GET",
            isErrorToast: false
        });
        return response;
    } catch (error) {
        console.log(error)
    }
});

export const getActiveStaffData = createAsyncThunk("get-active-staff", async (props) => {
    try {
        const response = await API_REQUEST({
            url: getActiveStaffDataEndPointURL,
            method: "GET",
            isErrorToast: false
        });
        return response;
    } catch (error) {
        console.log(error)
    }
});

export const updateStaffDetails = createAsyncThunk("update-staff", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: updateStaffEndPointURL,
            method: "POST",
            data: payload,
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    }
});

export const getSupplierData = createAsyncThunk("get-supplier", async (props) => {
    try {
        const response = await API_REQUEST({
            url: getSupplierEndPointURL,
            method: "GET",
            isErrorToast: false
        });
        return response;
    } catch (error) {
        console.log(error)
    }
});

export const addSupplierDetails = createAsyncThunk("add-supplier", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: addSupplierEndPointURL,
            method: "POST",
            data: payload,
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    }
});

export const addDockDetails = createAsyncThunk("add-dock", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: addDockDetailsEndPointURL,
            method: "POST",
            data: payload,
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    }
});

export const getBoatData = createAsyncThunk("get-boat", async (props) => {
    try {
        const response = await API_REQUEST({
            url: getAllBoatsDataEndPointURL,
            method: "GET",
            params: props,
            isErrorToast: false
        });
        return response;
    } catch (error) {
        console.log(error)
    }
});

// MVP1 Ventures - Start
export const onInviteUser = createAsyncThunk("invite-user", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: `n8n-api/api/v1.0/first-mate/inviteUserFromServiceHub?boatId=${payload.boatId}&email=${payload.email}&registration=${payload.registration}&status=${payload.status}&userId=${payload.userId}&companyName=${payload.companyName}&boatOwner=${payload.boatOwner}`,
            method: "GET",
            // data: payload,
            isErrorToast: false,
            // isExternalAPI: true
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    }
});

export const getBoatDataByRegNo = createAsyncThunk("get-boat-by-regno", async (props) => {
    const { regNo, callback } = props;
    try {
        const response = await API_REQUEST({
            url: `n8n-api/api/v1.0/first-mate/get-boathub-vessel-by-rego?registration=${regNo}`,
            method: "GET",
            // data: null,
            isErrorToast: false,
            // isExternalAPI: true
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    }
});

export const validateBoatHubOTP = createAsyncThunk("validate-boathub-otp", async (props) => {
    const { regNo, userId, code, callback } = props;
    try {
        const response = await API_REQUEST({
            url: `n8n-api/api/v1.0/first-mate/verifyOtpToGetBoathubVessel?registration=${regNo}&userId=${userId}&code=${code}`,
            method: "GET",
            isErrorToast: false,
            // isExternalAPI: true,
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    }
});

export const sendOtpToGetBoatHubVessel = createAsyncThunk("send-otp-to-get-boathub-vessel", async (props) => {
    const { regNo, userId, callback } = props;
    try {
        const response = await API_REQUEST({
            url: `n8n-api/api/v1.0/first-mate/sendOtpToGetBoathubVessel?registration=${regNo}&userId=${userId}`,
            method: "GET",
            isErrorToast: false,
            // isExternalAPI: true,
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    }
});
// MVP1 Ventures - End

export const addBoatDetails = createAsyncThunk("add-boat", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: addBoatDetailsEndPointURL,
            method: "POST",
            data: payload,
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    }
});

export const getDockData = createAsyncThunk("dock-data", async () => {
    try {
        const response = await API_REQUEST({
            url: getDockDetailsEndPointURL,
            method: "GET",
            isErrorToast: false
        });
        return response;
    } catch (error) {
        console.log(error)
    }
});

export const updateDocksDetails = createAsyncThunk("update-boat", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: updateDockDetailsEndPointURL,
            method: "POST",
            data: payload,
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    }
});

export const getAvailableBoats = createAsyncThunk("boat-available", async () => {
    try {
        const response = await API_REQUEST({
            url: getAvailableBoatsEndPointURL,
            method: "GET",
            isErrorToast: false
        });
        return response;
    } catch (error) {
        console.log(error)
    }
});

export const updateSupplierDetails = createAsyncThunk("update-supplier", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: updateSupplierEndPointURL,
            method: "POST",
            data: payload,
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    }
});

export const updateBoatDetails = createAsyncThunk("update-boat-details", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: updateBoatDetailsEndPointURL,
            method: "POST",
            data: payload,
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    }
});

// MVP1 Ventures
export const onUpdateNotifyBoatHubUser = createAsyncThunk("on-update-notify-boathub-user", async (props) => {
    const { regNo, callback } = props;
    try {
        const response = await API_REQUEST({
            url: `n8n-api/api/v1.0/first-mate/update/vassel/notifiy?registration=${regNo}`,
            method: "GET",
            isErrorToast: false,
            // isExternalAPI: true
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    }
});

export const getTomorrowTasks = createAsyncThunk("tomorrow-task", async (props) => {
    try {
        const response = await API_REQUEST({
            url: getTomorrowTaskEndPointURL,
            method: "GET",
            params: props,
            isErrorToast: false
        });
        return response;
    } catch (error) {
        console.log(error)
    }
});

export const assignBoatToDock = createAsyncThunk("assign-boat", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: assignBoatsToDockEndPointURL,
            method: "POST",
            data: payload,
        });
        callback(response);
        return response;
    } catch (error) {
        callback(null, error);
    }
});

export const getStaffTasks = createAsyncThunk("staff-task", async (props) => {
    try {
        const response = await API_REQUEST({
            url: getStaffTaskEndPointURL,
            method: "GET",
            params: props,
            isErrorToast: false
        });
        return response;
    } catch (error) {
        console.log(error)
    }
});

export const getAllInvoicedData = createAsyncThunk("invoice-data", async (props) => {
    try {
        const response = await API_REQUEST({
            url: getAllInvoiceDataEndPointURL,
            method: "GET",
            isErrorToast: false
        });
        return response;
    } catch (error) {
        console.log(error)
    }
});

export const getAllListInvoiceData = createAsyncThunk("list-invoice-data", async (props) => {
    try {
        const response = await API_REQUEST({
            url: getAllInvoiceDataEndPointURL,
            method: "GET",
            isErrorToast: false
        });
        return response;
    } catch (error) {
        console.log(error)
    }
});