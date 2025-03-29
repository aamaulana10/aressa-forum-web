import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import threadsReducer from './threads/reducer';
import threadDetailReducer from './threadDetail/reducer';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import voteReducer from './vote/reducer';
import leaderboardReducer from './leaderboard/reducer';

const store = configureStore({
    reducer: {
        authUser: authUserReducer,
        isPreload: isPreloadReducer,
        threads: threadsReducer,
        threadDetail: threadDetailReducer,
        loadingBar: loadingBarReducer,
        vote: voteReducer,
        leaderboard: leaderboardReducer,
    }
});

export default store;