import { createSlice } from "@reduxjs/toolkit";
import {
    getAllBoatTask,
    getAllTaskByID,
    AddLeads,
    getAllLeadsData,
    UpdateLeads,
    CreateTask,
    getAllTask,
    UpdateTask,
    recouringReminder,
    UpdateRecouring,
    getCompletedBoatTask,
    createBoatInvoice,
    getGeneratedInvoiceData,
    getAllBoatInvoice,
    sendPdfToBoatOwner
} from "../actions/maintainedBoatsActions";

const initialState = {
    isLoading2: false,
    boatTaskData: [],
    allTasks_by_id: [],
    allTasks: [],
    allLeads: [],
    recouringData: [],
    completedBoatTask: [],
    getInvoiceData: [],
    allBoatListInvoice: [],
};

export const maintainedSlice = createSlice({
    name: "maintainedSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        // getAllBoatTask
        builder.addCase(getAllBoatTask.pending, (state, action) => {
            state.isLoading2 = true;
        });
        builder.addCase(getAllBoatTask.fulfilled, (state, action) => {
            const { data } = action.payload ?? [];
            state.boatTaskData = data ?? []
            state.isLoading2 = false;
        });
        builder.addCase(getAllBoatTask.rejected, (state, action) => {
            state.isLoading2 = false;
        });

        // getAllTaskByID
        builder.addCase(getAllTaskByID.pending, (state, action) => {
            state.isLoading2 = true;
        });
        builder.addCase(getAllTaskByID.fulfilled, (state, action) => {
            const { data } = action.payload ?? [];
            state.allTasks_by_id = data ?? []
            state.isLoading2 = false;
        });
        builder.addCase(getAllTaskByID.rejected, (state, action) => {
            state.isLoading2 = false;
        });

        // AddLeads
        builder.addCase(AddLeads.pending, (state, action) => {
            state.isLoading2 = true;
        });
        builder.addCase(AddLeads.fulfilled, (state, action) => {
            state.isLoading2 = false;
        });
        builder.addCase(AddLeads.rejected, (state, action) => {
            state.isLoading2 = false;
        });

        // getAllLeadsData
        builder.addCase(getAllLeadsData.pending, (state, action) => {
            state.isLoading2 = true;
        });
        builder.addCase(getAllLeadsData.fulfilled, (state, action) => {
            const { data } = action.payload ?? [];
            state.allLeads = data ?? []
            state.isLoading2 = false;
        });
        builder.addCase(getAllLeadsData.rejected, (state, action) => {
            state.isLoading2 = false;
        });

        // UpdateLeads
        builder.addCase(UpdateLeads.pending, (state, action) => {
            state.isLoading2 = true;
        });
        builder.addCase(UpdateLeads.fulfilled, (state, action) => {
            state.isLoading2 = false;
        });
        builder.addCase(UpdateLeads.rejected, (state, action) => {
            state.isLoading2 = false;
        });

        // CreateTask
        builder.addCase(CreateTask.pending, (state, action) => {
            state.isLoading2 = true;
        });
        builder.addCase(CreateTask.fulfilled, (state, action) => {
            state.isLoading2 = false;
        });
        builder.addCase(CreateTask.rejected, (state, action) => {
            state.isLoading2 = false;
        });

        // getAllTask
        builder.addCase(getAllTask.pending, (state, action) => {
            state.isLoading2 = true;
        });
        builder.addCase(getAllTask.fulfilled, (state, action) => {
            const { data } = action.payload ?? [];
            state.allTasks = data ?? []
            state.isLoading2 = false;
        });
        builder.addCase(getAllTask.rejected, (state, action) => {
            state.isLoading2 = false;
        });

        // UpdateTask
        builder.addCase(UpdateTask.pending, (state, action) => {
            state.isLoading2 = true;
        });
        builder.addCase(UpdateTask.fulfilled, (state, action) => {
            state.isLoading2 = false;
        });
        builder.addCase(UpdateTask.rejected, (state, action) => {
            state.isLoading2 = false;
        });

        // recouringReminder
        builder.addCase(recouringReminder.pending, (state, action) => {
            state.isLoading2 = true;
        });
        builder.addCase(recouringReminder.fulfilled, (state, action) => {
            const { data } = action.payload ?? [];
            state.recouringData = data ?? []
            state.isLoading2 = false;
        });
        builder.addCase(recouringReminder.rejected, (state, action) => {
            state.isLoading2 = false;
        });

        // UpdateRecouring
        builder.addCase(UpdateRecouring.pending, (state, action) => {
            state.isLoading2 = true;
        });
        builder.addCase(UpdateRecouring.fulfilled, (state, action) => {
            state.isLoading2 = false;
        });
        builder.addCase(UpdateRecouring.rejected, (state, action) => {
            state.isLoading2 = false;
        });

        // getCompletedBoatTask
        builder.addCase(getCompletedBoatTask.pending, (state, action) => {
            state.isLoading2 = true;
        });
        builder.addCase(getCompletedBoatTask.fulfilled, (state, action) => {
            const { data } = action.payload ?? [];
            state.completedBoatTask = data ?? []
            state.isLoading2 = false;
        });
        builder.addCase(getCompletedBoatTask.rejected, (state, action) => {
            state.isLoading2 = false;
        });

        // createBoatInvoice
        builder.addCase(createBoatInvoice.pending, (state, action) => {
            state.isLoading2 = true;
        });
        builder.addCase(createBoatInvoice.fulfilled, (state, action) => {
            state.isLoading2 = false;
        });
        builder.addCase(createBoatInvoice.rejected, (state, action) => {
            state.isLoading2 = false;
        });

        // getGeneratedInvoiceData
        builder.addCase(getGeneratedInvoiceData.pending, (state, action) => {
            state.isLoading2 = true;
        });
        builder.addCase(getGeneratedInvoiceData.fulfilled, (state, action) => {
            const { data } = action.payload ?? [];
            state.getInvoiceData = data ?? []
            state.isLoading2 = false;
        });
        builder.addCase(getGeneratedInvoiceData.rejected, (state, action) => {
            state.isLoading2 = false;
        });

        // getAllBoatInvoice
        builder.addCase(getAllBoatInvoice.pending, (state, action) => {
            state.isLoading2 = true;
        });
        builder.addCase(getAllBoatInvoice.fulfilled, (state, action) => {
            const { data } = action.payload ?? [];
            state.allBoatListInvoice = data ?? []
            state.isLoading2 = false;
        });
        builder.addCase(getAllBoatInvoice.rejected, (state, action) => {
            state.isLoading2 = false;
        });

        // sendPdfToBoatOwner
        builder.addCase(sendPdfToBoatOwner.pending, (state, action) => {
            state.isLoading2 = true;
        });
        builder.addCase(sendPdfToBoatOwner.fulfilled, (state, action) => {
            const { data } = action.payload ?? [];
            state.allBoatListInvoice = data ?? []
            state.isLoading2 = false;
        });
        builder.addCase(sendPdfToBoatOwner.rejected, (state, action) => {
            state.isLoading2 = false;
        });
    }
});

export default maintainedSlice.reducer;