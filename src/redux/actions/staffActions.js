import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_REQUEST } from ".";
import {
    addStaffEndPointURL,
    getStaffDataEndPointURL,
    updateStaffEndPointURL,
    getSupplierEndPointURL,
    addSupplierEndPointURL
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