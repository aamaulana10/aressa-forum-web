import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../service/api";

const ActionType = {
    GET_THREAD_DETAIL: 'RECEIVE_TALK_DETAIL',
    CREATE_COMMENT: 'CREATE_COMMENT',
    UP_VOTE_THREAD: 'UP_VOTE_THREAD',
    DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD',
    NEUTRALIZE_THREAD_VOTE: 'NEUTRALIZE_THREAD_VOTE',
    UP_VOTE_COMMENT: 'UP_VOTE_COMMENT',
    DOWN_VOTE_COMMENT: 'DOWN_VOTE_COMMENT',
    NEUTRALIZE_COMMENT_VOTE: 'NEUTRALIZE_COMMENT_VOTE',
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

function asyncUpVoteThread(threadId) {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            await api.upVoteThread(threadId);
            const threadDetail = await api.getThreadDetail(threadId);
            dispatch(getThreadDetailActionCreator(threadDetail));
        } catch (error) {
            alert(error.message);
        } finally {
            dispatch(hideLoading());
        }
    };
}

function asyncDownVoteThread(threadId) {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            await api.downVoteThread(threadId);
            const threadDetail = await api.getThreadDetail(threadId);
            dispatch(getThreadDetailActionCreator(threadDetail));
        } catch (error) {
            alert(error.message);
        } finally {
            dispatch(hideLoading());
        }
    };
}

function asyncNeutralizeThreadVote(threadId) {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            await api.neutralizeThreadVote(threadId);
            const threadDetail = await api.getThreadDetail(threadId);
            dispatch(getThreadDetailActionCreator(threadDetail));
        } catch (error) {
            alert(error.message);
        } finally {
            dispatch(hideLoading());
        }
    };
}

function asyncUpVoteComment(threadId, commentId) {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            await api.upVoteComment(threadId, commentId);
            const threadDetail = await api.getThreadDetail(threadId);
            dispatch(getThreadDetailActionCreator(threadDetail));
        } catch (error) {
            alert(error.message);
        } finally {
            dispatch(hideLoading());
        }
    };
}

function asyncDownVoteComment(threadId, commentId) {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            await api.downVoteComment(threadId, commentId);
            const threadDetail = await api.getThreadDetail(threadId);
            dispatch(getThreadDetailActionCreator(threadDetail));
        } catch (error) {
            alert(error.message);
        } finally {
            dispatch(hideLoading());
        }
    };
}

function asyncNeutralizeCommentVote(threadId, commentId) {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            await api.neutralizeCommentVote(threadId, commentId);
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
    asyncUpVoteThread,
    asyncDownVoteThread,
    asyncNeutralizeThreadVote,
    asyncUpVoteComment,
    asyncDownVoteComment,
    asyncNeutralizeCommentVote,
};