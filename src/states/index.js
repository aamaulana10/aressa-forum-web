import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from 'react-redux-loading-bar';
import threadsReducer from "./threads/reducer";
import threadDetailReducer from "./threadDetail/reducer";
import authUserReducer from "./authUser/reducer";
import isPreloadReducer from "./isPreload/reducer";
import voteReducer from "./vote/reducer";

const store = configureStore({
    reducer: {
        authUser: authUserReducer,
        isPreload: isPreloadReducer,
        threads: threadsReducer,
        threadDetail: threadDetailReducer,
        loadingBar: loadingBarReducer,
        vote: voteReducer,
    }
})

export default store;