import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_REQUEST } from ".";
import {
    getAllBoatWithTasksEndPointURL,
    getAllTaskDataEndPointURL,
    AddLeaddataEndPointURL,
    getAllLeaddataEndPointURL
} from "../../routes/BackendRoutes";

export const getAllBoatTask = createAsyncThunk("boat-task", async () => {
    try {
        const response = await API_REQUEST({
            url: getAllBoatWithTasksEndPointURL,
            method: "GET",
            // data: payload,
        });
        return response;
    } catch (error) {
        console.log('error');
    }
});

export const getAllTask = createAsyncThunk("all-task", async (props) => {
    const { payload } = props;
    try {
        const response = await API_REQUEST({
            url: getAllTaskDataEndPointURL + `?boatId=${payload}`,
            method: "GET",
            // data: payload,
        });
        return response;
    } catch (error) {
        console.log('error');
    }
});

export const getAllLeadsData = createAsyncThunk("all-lead", async () => {
    try {
        const response = await API_REQUEST({
            url: getAllLeaddataEndPointURL,
            method: "GET",
        });
        return response;
    } catch (error) {
        console.log('error');
    }
});

export const AddLeads = createAsyncThunk("add-lead", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: AddLeaddataEndPointURL,
            method: "POST",
            data: payload,
        });
        return callback(response);
    } catch (error) {
        callback(null, error);
    }
});