import { configureStore } from "@reduxjs/toolkit";
import threadsReducer from "./threads/reducer";
import threadDetailReducer from "./threadDetail/reducer";

const store = configureStore({
    reducer: {
        threads: threadsReducer,
        threadDetail: threadDetailReducer,
    }
})

export default store;