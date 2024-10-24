import { createSlice } from "@reduxjs/toolkit";
import {
    addStaffDetails,
    getStaffData,
    getSupplierData,
    addSupplierDetails,
    addDockDetails,
    getBoatData,
    addBoatDetails,
    getDockData,
    updateDocksDetails,
    getAvailableBoats,
    updateSupplierDetails
} from "../actions/staffActions";

const initialState = {
    isLoading: false,
    staff_data: [],
    supplier_data: [],
    all_boats: [],
    all_docks: [],
    available_boats: []
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

        // addSupplierDetails
        builder.addCase(addSupplierDetails.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addSupplierDetails.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(addSupplierDetails.rejected, (state, action) => {
            state.isLoading = false;
        });

        // addDockDetails
        builder.addCase(addDockDetails.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addDockDetails.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(addDockDetails.rejected, (state, action) => {
            state.isLoading = false;
        });

        // getBoatData
        builder.addCase(getBoatData.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getBoatData.fulfilled, (state, action) => {
            const { data } = action?.payload || [];
            state.all_boats = data ?? []
            state.isLoading = false;
        });
        builder.addCase(getBoatData.rejected, (state, action) => {
            state.isLoading = false;
        });

        // addBoatDetails
        builder.addCase(addBoatDetails.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addBoatDetails.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(addBoatDetails.rejected, (state, action) => {
            state.isLoading = false;
        });

        // getDockData
        builder.addCase(getDockData.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getDockData.fulfilled, (state, action) => {
            const { data } = action?.payload || [];
            state.all_docks = data ?? []
            state.isLoading = false;
        });
        builder.addCase(getDockData.rejected, (state, action) => {
            state.isLoading = false;
        });

        // updateDocksDetails
        builder.addCase(updateDocksDetails.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(updateDocksDetails.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(updateDocksDetails.rejected, (state, action) => {
            state.isLoading = false;
        });

        // getAvailableBoats
        builder.addCase(getAvailableBoats.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getAvailableBoats.fulfilled, (state, action) => {
            const { data } = action?.payload || [];
            state.available_boats = data ?? []
            state.isLoading = false;
        });
        builder.addCase(getAvailableBoats.rejected, (state, action) => {
            state.isLoading = false;
        });

        // updateSupplierDetails
        builder.addCase(updateSupplierDetails.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(updateSupplierDetails.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(updateSupplierDetails.rejected, (state, action) => {
            state.isLoading = false;
        });
    },
});

export default staffSlice.reducer;