import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../service/api";

const ActionType = {
    GET_THREAD_DETAIL: 'GET_THREAD_DETAIL',
    CREATE_COMMENT: 'CREATE_COMMENT',
};

function getThreadDetailActionCreator(threadDetail) {
    return {
        type: ActionType.GET_THREAD_DETAIL,
        payload: {
            threadDetail,
        },
    };
}

function asyncGetThreadDetail(threadId) {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const threadDetail = await api.getThreadDetail(threadId);
            dispatch(getThreadDetailActionCreator(threadDetail));
        } catch (error) {
            alert(error.message);
        } finally {
            dispatch(hideLoading());
        }
    };
}

function asyncCreateComment(threadId, content) {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            await api.createComment(threadId, content);
            const threadDetail = await api.getThreadDetail(threadId);
            dispatch(getThreadDetailActionCreator(threadDetail));
        } catch (error) {
            alert(error.message);
        } finally {
            dispatch(hideLoading());
        }
    };
}

export {
    ActionType,
    getThreadDetailActionCreator,
    asyncGetThreadDetail,
    asyncCreateComment,
};