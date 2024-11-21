import { createSlice } from "@reduxjs/toolkit";
import {
    getAllBoatTask,
    getAllTask,
    AddLeads,
    getAllLeadsData
} from "../actions/maintainedBoatsActions";

const initialState = {
    isLoading: false,
    boatTaskData: [],
    allTasks: [],
    allLeads: []
};

export const maintainedSlice = createSlice({
    name: "maintainedSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        // getAllBoatTask
        builder.addCase(getAllBoatTask.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getAllBoatTask.fulfilled, (state, action) => {
            const { data } = action.payload ?? [];
            state.boatTaskData = data ?? []
            state.isLoading = false;
        });
        builder.addCase(getAllBoatTask.rejected, (state, action) => {
            state.isLoading = false;
        });

        // getAllTask
        builder.addCase(getAllTask.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getAllTask.fulfilled, (state, action) => {
            const { data } = action.payload ?? [];
            state.allTasks = data ?? []
            state.isLoading = false;
        });
        builder.addCase(getAllTask.rejected, (state, action) => {
            state.isLoading = false;
        });

        // AddLeads
        builder.addCase(AddLeads.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(AddLeads.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(AddLeads.rejected, (state, action) => {
            state.isLoading = false;
        });

        // getAllLeadsData
        builder.addCase(getAllLeadsData.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getAllLeadsData.fulfilled, (state, action) => {
            const { data } = action.payload ?? [];
            state.allLeads = data ?? []
            state.isLoading = false;
        });
        builder.addCase(getAllLeadsData.rejected, (state, action) => {
            state.isLoading = false;
        });
    }
});

export default maintainedSlice.reducer;