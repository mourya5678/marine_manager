import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_REQUEST } from ".";
import {
    addStaffEndPointURL,
    getStaffDataEndPointURL,
    updateStaffEndPointURL,
    getSupplierEndPointURL,
    addSupplierEndPointURL,
    addDockDetailsEndPointURL,
    getAllBoatsDataEndPointURL,
    addBoatDetailsEndPointURL,
    getDockDetailsEndPointURL
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
        });
        return response;
    } catch (error) {
        console.log(error)
    }
});

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
        });
        return response;
    } catch (error) {
        console.log(error)
    }
});