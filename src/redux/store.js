import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import staffReducer from "./reducers/staffReducer";
import maintainedReducer from "./reducers/maintainedBoatsReducer";

const store = configureStore({
    reducer: {
        authReducer,
        staffReducer,
        maintainedReducer
    },
});

export default store;