import { createSlice } from "@reduxjs/toolkit";
import {
    getAllBoatTask,
    getAllTask,
    AddLeads,
    getAllLeadsData,
    UpdateLeads,
    CreateTask
} from "../actions/maintainedBoatsActions";

const initialState = {
    isLoading1: false,
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
            state.isLoading1 = true;
        });
        builder.addCase(getAllBoatTask.fulfilled, (state, action) => {
            const { data } = action.payload ?? [];
            state.boatTaskData = data ?? []
            state.isLoading1 = false;
        });
        builder.addCase(getAllBoatTask.rejected, (state, action) => {
            state.isLoading1 = false;
        });

        // getAllTask
        builder.addCase(getAllTask.pending, (state, action) => {
            state.isLoading1 = true;
        });
        builder.addCase(getAllTask.fulfilled, (state, action) => {
            const { data } = action.payload ?? [];
            state.allTasks = data ?? []
            state.isLoading1 = false;
        });
        builder.addCase(getAllTask.rejected, (state, action) => {
            state.isLoading1 = false;
        });

        // AddLeads
        builder.addCase(AddLeads.pending, (state, action) => {
            state.isLoading1 = true;
        });
        builder.addCase(AddLeads.fulfilled, (state, action) => {
            state.isLoading1 = false;
        });
        builder.addCase(AddLeads.rejected, (state, action) => {
            state.isLoading1 = false;
        });

        // getAllLeadsData
        builder.addCase(getAllLeadsData.pending, (state, action) => {
            state.isLoading1 = true;
        });
        builder.addCase(getAllLeadsData.fulfilled, (state, action) => {
            const { data } = action.payload ?? [];
            state.allLeads = data ?? []
            state.isLoading1 = false;
        });
        builder.addCase(getAllLeadsData.rejected, (state, action) => {
            state.isLoading1 = false;
        });

        // UpdateLeads
        builder.addCase(UpdateLeads.pending, (state, action) => {
            state.isLoading1 = true;
        });
        builder.addCase(UpdateLeads.fulfilled, (state, action) => {
            state.isLoading1 = false;
        });
        builder.addCase(UpdateLeads.rejected, (state, action) => {
            state.isLoading1 = false;
        });

        // CreateTask
        builder.addCase(CreateTask.pending, (state, action) => {
            state.isLoading1 = true;
        });
        builder.addCase(CreateTask.fulfilled, (state, action) => {
            state.isLoading1 = false;
        });
        builder.addCase(CreateTask.rejected, (state, action) => {
            state.isLoading1 = false;
        });
    }
});

export default maintainedSlice.reducer;