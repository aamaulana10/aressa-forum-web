import { configureStore } from "@reduxjs/toolkit";
import threadsReducer from "./threads/reducer";

const store = configureStore({
    reducer: {
        threads: threadsReducer
    }
})

export default store;