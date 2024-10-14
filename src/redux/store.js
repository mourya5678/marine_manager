import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import staffReducer from "./reducers/staffReducer";

const store = configureStore({
    reducer: {
        authReducer,
        staffReducer
    },
});

export default store;