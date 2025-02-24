import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_REQUEST } from ".";
import {
    getAllBoatWithTasksEndPointURL,
    getAllTaskDataEndPointURL,
    AddLeaddataEndPointURL,
    getAllLeaddataEndPointURL,
    UpdateLeaddataEndPointURL,
    createTaskEndPointURL,
    updateTaskEndPointURL,
    RecouringReminderEndPointURL,
    UpdateRecouringEndPointURL,
    getAllCompletedBoatTasksEndPointURL,
    generateBoatInvoiceEndPointURL,
    getGeneratedInvoiceEndPointURL,
    getBoatListOfInvoiceEndPointURL
} from "../../routes/BackendRoutes";

export const getAllBoatTask = createAsyncThunk("boat-task", async () => {
    try {
        const response = await API_REQUEST({
            url: getAllBoatWithTasksEndPointURL,
            method: "GET",
            isErrorToast: false
            // data: payload,
        });
        return response;
    } catch (error) {
        console.log('error');
    }
});

export const getAllTaskByID = createAsyncThunk("all-task-by-id", async (props) => {
    const { payload } = props;
    try {
        const response = await API_REQUEST({
            url: getAllTaskDataEndPointURL + `?boatId=${payload}`,
            method: "GET",
            isErrorToast: false
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
            isErrorToast: false,
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

export const UpdateLeads = createAsyncThunk("update-lead", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: UpdateLeaddataEndPointURL,
            method: "POST",
            data: payload,
        });
        return callback(response);
    } catch (error) {
        callback(null, error);
    }
});

export const CreateTask = createAsyncThunk("create-task", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: createTaskEndPointURL,
            method: "POST",
            data: payload,
        });
        return callback(response);
    } catch (error) {
        callback(null, error);
    }
});

export const getAllTask = createAsyncThunk("all-task", async () => {
    try {
        const response = await API_REQUEST({
            url: getAllTaskDataEndPointURL,
            method: "GET",
            isErrorToast: false,
        });
        return response;
    } catch (error) {
        console.log('error');
    }
});

export const UpdateTask = createAsyncThunk("update-task", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: updateTaskEndPointURL,
            method: "POST",
            data: payload,
        });
        return callback(response);
    } catch (error) {
        callback(null, error);
    }
});

export const recouringReminder = createAsyncThunk("recouring-reminder", async () => {
    try {
        const response = await API_REQUEST({
            url: RecouringReminderEndPointURL,
            method: "GET",
        });
        return response;
    } catch (error) {
        console.log('error');
    }
});

export const UpdateRecouring = createAsyncThunk("update-recouring", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: UpdateRecouringEndPointURL,
            method: "POST",
            data: payload,
        });
        return callback(response);
    } catch (error) {
        callback(null, error);
    }
});

export const getCompletedBoatTask = createAsyncThunk("complete-task-list", async (props) => {
    const { payload } = props;
    try {
        const response = await API_REQUEST({
            url: getAllCompletedBoatTasksEndPointURL + payload,
            method: "GET",
            isErrorToast: false,
        });
        return response;
    } catch (error) {
        console.log('error');
    }
});

export const createBoatInvoice = createAsyncThunk("create-boat-invoice", async (props) => {
    const { payload, callback } = props;
    try {
        const response = await API_REQUEST({
            url: generateBoatInvoiceEndPointURL,
            method: "POST",
            data: payload,
        });
        return callback(response);
    } catch (error) {
        callback(null, error);
    }
});

export const getGeneratedInvoiceData = createAsyncThunk("invoice-data", async (props) => {
    const { payload } = props;
    try {
        const response = await API_REQUEST({
            url: getGeneratedInvoiceEndPointURL + payload,
            method: "GET",
            isErrorToast: false,
        });
        return response;
    } catch (error) {
        console.log('error');
    }
});

// getBoatListOfInvoiceEndPointURL

export const getAllBoatInvoice = createAsyncThunk("boat-list", async () => {
    try {
        const response = await API_REQUEST({
            url: getBoatListOfInvoiceEndPointURL,
            method: "GET",
            isErrorToast: false
            // data: payload,
        });
        return response;
    } catch (error) {
        console.log('error');
    }
});