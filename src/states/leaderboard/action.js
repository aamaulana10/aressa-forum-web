import { hideLoading } from "react-redux-loading-bar";
import { showLoading } from "react-redux-loading-bar";
import api from "../../service/api";

const ActionType = {
    GET_LEADERBOARD: 'GET_LEADERBOARD',
}

function getLeaderboardActionCreator(leaderboard) {
    return {
        type: ActionType.GET_LEADERBOARD,
        payload: {
            leaderboard,
        }
    }
}

function asyncGetLeaderboard() {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const leaderboard = await api.getLeaderboard();
            dispatch(getLeaderboardActionCreator(leaderboard));
        } catch (error) {
            alert(error.message);
        } finally {
            dispatch(hideLoading());
        }
    }
}

export {
    ActionType,
    getLeaderboardActionCreator,
    asyncGetLeaderboard,
}