import { createSlice } from "@reduxjs/toolkit";
import {
    addStaffDetails,
    getStaffData,
    getSupplierData
} from "../actions/staffActions";

const initialState = {
    isLoading: false,
    staff_data: [],
    supplier_data: []
};

export const staffSlice = createSlice({
    name: "Auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        // addStaffDetails
        builder.addCase(addStaffDetails.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addStaffDetails.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(addStaffDetails.rejected, (state, action) => {
            state.isLoading = false;
        });

        // getStaffData
        builder.addCase(getStaffData.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getStaffData.fulfilled, (state, action) => {
            const { data } = action?.payload || [];
            state.staff_data = data ?? []
            state.isLoading = false;
        });
        builder.addCase(getStaffData.rejected, (state, action) => {
            state.isLoading = false;
        });

        // getSupplierData
        builder.addCase(getSupplierData.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getSupplierData.fulfilled, (state, action) => {
            const { data } = action?.payload || [];
            state.supplier_data = data ?? []
            state.isLoading = false;
        });
        builder.addCase(getSupplierData.rejected, (state, action) => {
            state.isLoading = false;
        });
    },
});

export default staffSlice.reducer;