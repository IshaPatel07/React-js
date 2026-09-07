import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginslice.js";

export const store = configureStore({
    reducer: {
        login: loginReducer,
    },
});