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
    updateSupplierDetails,
    updateBoatDetails,
    getActiveStaffData,
    getTomorrowTasks,
    assignBoatToDock,
    getStaffTasks
} from "../actions/staffActions";

const initialState = {
    isLoading1: false,
    staff_data: [],
    supplier_data: [],
    staff_active_data: [],
    all_boats: [],
    all_docks: [],
    available_boats: [],
    tomorrow_task: [],
    staff_task: [],
};

export const staffSlice = createSlice({
    name: "Auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        // addStaffDetails
        builder.addCase(addStaffDetails.pending, (state, action) => {
            state.isLoading1 = true;
        });
        builder.addCase(addStaffDetails.fulfilled, (state, action) => {
            state.isLoading1 = false;
        });
        builder.addCase(addStaffDetails.rejected, (state, action) => {
            state.isLoading1 = false;
        });

        // getStaffData
        builder.addCase(getStaffData.pending, (state, action) => {
            state.isLoading1 = true;
        });
        builder.addCase(getStaffData.fulfilled, (state, action) => {
            const { data } = action?.payload || [];
            state.staff_data = data ?? []
            state.isLoading1 = false;
        });
        builder.addCase(getStaffData.rejected, (state, action) => {
            state.isLoading1 = false;
        });

        // getActiveStaffData
        builder.addCase(getActiveStaffData.pending, (state, action) => {
            state.isLoading1 = true;
        });
        builder.addCase(getActiveStaffData.fulfilled, (state, action) => {
            const { data } = action?.payload || [];
            state.staff_active_data = data ?? []
            state.isLoading1 = false;
        });
        builder.addCase(getActiveStaffData.rejected, (state, action) => {
            state.isLoading1 = false;
        });

        // getSupplierData
        builder.addCase(getSupplierData.pending, (state, action) => {
            state.isLoading1 = true;
        });
        builder.addCase(getSupplierData.fulfilled, (state, action) => {
            const { data } = action?.payload || [];
            state.supplier_data = data ?? []
            state.isLoading1 = false;
        });
        builder.addCase(getSupplierData.rejected, (state, action) => {
            state.isLoading1 = false;
        });

        // addSupplierDetails
        builder.addCase(addSupplierDetails.pending, (state, action) => {
            state.isLoading1 = true;
        });
        builder.addCase(addSupplierDetails.fulfilled, (state, action) => {
            state.isLoading1 = false;
        });
        builder.addCase(addSupplierDetails.rejected, (state, action) => {
            state.isLoading1 = false;
        });

        // addDockDetails
        builder.addCase(addDockDetails.pending, (state, action) => {
            state.isLoading1 = true;
        });
        builder.addCase(addDockDetails.fulfilled, (state, action) => {
            state.isLoading1 = false;
        });
        builder.addCase(addDockDetails.rejected, (state, action) => {
            state.isLoading1 = false;
        });

        // getBoatData
        builder.addCase(getBoatData.pending, (state, action) => {
            state.isLoading1 = true;
        });
        builder.addCase(getBoatData.fulfilled, (state, action) => {
            const { data } = action?.payload || [];
            state.all_boats = data ?? []
            state.isLoading1 = false;
        });
        builder.addCase(getBoatData.rejected, (state, action) => {
            state.isLoading1 = false;
        });

        // addBoatDetails
        builder.addCase(addBoatDetails.pending, (state, action) => {
            state.isLoading1 = true;
        });
        builder.addCase(addBoatDetails.fulfilled, (state, action) => {
            state.isLoading1 = false;
        });
        builder.addCase(addBoatDetails.rejected, (state, action) => {
            state.isLoading1 = false;
        });

        // getDockData
        builder.addCase(getDockData.pending, (state, action) => {
            state.isLoading1 = true;
        });
        builder.addCase(getDockData.fulfilled, (state, action) => {
            const { data } = action?.payload || [];
            state.all_docks = data ?? []
            state.isLoading1 = false;
        });
        builder.addCase(getDockData.rejected, (state, action) => {
            state.isLoading1 = false;
        });

        // updateDocksDetails
        builder.addCase(updateDocksDetails.pending, (state, action) => {
            state.isLoading1 = true;
        });
        builder.addCase(updateDocksDetails.fulfilled, (state, action) => {
            state.isLoading1 = false;
        });
        builder.addCase(updateDocksDetails.rejected, (state, action) => {
            state.isLoading1 = false;
        });

        // getAvailableBoats
        builder.addCase(getAvailableBoats.pending, (state, action) => {
            state.isLoading1 = true;
        });
        builder.addCase(getAvailableBoats.fulfilled, (state, action) => {
            const { data } = action?.payload || [];
            state.available_boats = data ?? []
            state.isLoading1 = false;
        });
        builder.addCase(getAvailableBoats.rejected, (state, action) => {
            state.isLoading1 = false;
        });

        // updateSupplierDetails
        builder.addCase(updateSupplierDetails.pending, (state, action) => {
            state.isLoading1 = true;
        });
        builder.addCase(updateSupplierDetails.fulfilled, (state, action) => {
            state.isLoading1 = false;
        });
        builder.addCase(updateSupplierDetails.rejected, (state, action) => {
            state.isLoading1 = false;
        });

        // updateBoatDetails
        builder.addCase(updateBoatDetails.pending, (state, action) => {
            state.isLoading1 = true;
        });
        builder.addCase(updateBoatDetails.fulfilled, (state, action) => {
            state.isLoading1 = false;
        });
        builder.addCase(updateBoatDetails.rejected, (state, action) => {
            state.isLoading1 = false;
        });

        // getTomorrowTasks
        builder.addCase(getTomorrowTasks.pending, (state, action) => {
            state.isLoading1 = true;
        });
        builder.addCase(getTomorrowTasks.fulfilled, (state, action) => {
            const { data } = action?.payload || [];
            state.tomorrow_task = data ?? []
            state.isLoading1 = false;
        });
        builder.addCase(getTomorrowTasks.rejected, (state, action) => {
            state.isLoading1 = false;
        });

        // assignBoatToDock
        builder.addCase(assignBoatToDock.pending, (state, action) => {
            state.isLoading1 = true;
        });
        builder.addCase(assignBoatToDock.fulfilled, (state, action) => {
            state.isLoading1 = false;
        });
        builder.addCase(assignBoatToDock.rejected, (state, action) => {
            state.isLoading1 = false;
        });

        // getStaffTasks
        builder.addCase(getStaffTasks.pending, (state, action) => {
            state.isLoading1 = true;
        });
        builder.addCase(getStaffTasks.fulfilled, (state, action) => {
            const { data } = action?.payload || [];
            state.staff_task = data?.staffMembers ?? []
            state.isLoading1 = false;
        });
        builder.addCase(getStaffTasks.rejected, (state, action) => {
            state.isLoading1 = false;
        });
    },
});

export default staffSlice.reducer;