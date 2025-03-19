import { configureStore } from "@reduxjs/toolkit";
import threadsReducer from "./threads/reducer";
import threadDetailReducer from "./threadDetail/reducer";
import authUserReducer from "./authUser/reducer";
import isPreloadReducer from "./isPreload/reducer";

const store = configureStore({
    reducer: {
        authUser: authUserReducer,
        isPreload: isPreloadReducer,
        threads: threadsReducer,
        threadDetail: threadDetailReducer,
    }
})

export default store;