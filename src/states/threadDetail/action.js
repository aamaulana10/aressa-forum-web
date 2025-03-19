import api from "../../service/api";

const ActionType = {
    GET_THREAD_DETAIL: 'RECEIVE_TALK_DETAIL',
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
        try {
            const threadDetail = await api.getThreadDetail(threadId);
            dispatch(getThreadDetailActionCreator(threadDetail));
        } catch (error) {
            alert(error.message);
        }
    };
}

export {
    ActionType,
    getThreadDetailActionCreator,
    asyncGetThreadDetail,
};