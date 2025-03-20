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

function createCommentActionCreator(threadId, userId) {
    return {
        type: ActionType.CREATE_COMMENT,
        payload: {
            threadId,
            userId,
        },
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

function upVoteThreadActionCreator(threadId, userId) {
    return {
        type: ActionType.UP_VOTE_THREAD,
        payload: {
            threadId,
            userId,
        },
    };
}

function asyncUpVoteThread(threadId, userId) {
    return async (dispatch, getState) => {
        const { threadDetail } = getState();

        // Optimistic update
        dispatch(upVoteThreadActionCreator(threadId, userId));

        try {
            await api.upVoteThread(threadId);
        } catch (error) {
            // Revert on failure
            dispatch(getThreadDetailActionCreator(threadDetail));
            alert(error.message);
        }
    };
}

function downVoteThreadActionCreator(threadId, userId) {
    return {
        type: ActionType.DOWN_VOTE_THREAD,
        payload: {
            threadId,
            userId,
        },
    };
}

function asyncDownVoteThread(threadId) {
    return async (dispatch, getState) => {
        const authUser = JSON.parse(localStorage.getItem('authUser'));
        const { threadDetail } = getState();

        // Optimistic update
        dispatch(downVoteThreadActionCreator(threadId, authUser.id));

        try {
            await api.downVoteThread(threadId);
        } catch (error) {
            // Revert on failure
            dispatch(getThreadDetailActionCreator(threadDetail));
            alert(error.message);
        }
    };
}

function neutralizeThreadVoteActionCreator(threadId, userId) {
    return {
        type: ActionType.NEUTRALIZE_THREAD_VOTE,
        payload: {
            threadId,
            userId,
        },
    };
}

function asyncNeutralizeThreadVote(threadId) {
    return async (dispatch, getState) => {
        const authUser = JSON.parse(localStorage.getItem('authUser'));
        const { threadDetail } = getState();

        // Optimistic update
        dispatch(neutralizeThreadVoteActionCreator(threadId, authUser.id));

        try {
            await api.neutralizeThreadVote(threadId);
        } catch (error) {
            // Revert on failure
            dispatch(getThreadDetailActionCreator(threadDetail));
            alert(error.message);
        }
    };
}

function upVoteCommentActionCreator(threadId, commentId, userId) {
    return {
        type: ActionType.UP_VOTE_COMMENT,
        payload: {
            threadId,
            commentId,
            userId,
        },
    };
}

function asyncUpVoteComment(threadId, commentId, userId) {
    return async (dispatch, getState) => {
        const { threadDetail } = getState();

        // Optimistic update
        dispatch(upVoteCommentActionCreator(threadId, commentId, userId));

        try {
            await api.upVoteComment(threadId, commentId);
        } catch (error) {
            // Revert on failure
            dispatch(getThreadDetailActionCreator(threadDetail));
            alert(error.message);
        }
    };
}

function downVoteCommentActionCreator(threadId, commentId, userId) {
    return {
        type: ActionType.DOWN_VOTE_COMMENT,
        payload: {
            threadId,
            commentId,
            userId,
        },
    };
}

function asyncDownVoteComment(threadId, commentId) {
    return async (dispatch, getState) => {
        const authUser = JSON.parse(localStorage.getItem('authUser'));
        const { threadDetail } = getState();

        // Optimistic update
        dispatch(downVoteCommentActionCreator(threadId, commentId, authUser.id));

        try {
            await api.downVoteComment(threadId, commentId);
        } catch (error) {
            // Revert on failure
            dispatch(getThreadDetailActionCreator(threadDetail));
            alert(error.message);
        }
    };
}

function neutralizeCommentVoteActionCreator(threadId, commentId, userId) {
    return {
        type: ActionType.NEUTRALIZE_COMMENT_VOTE,
        payload: {
            threadId,
            commentId,
            userId,
        },
    };
}

function asyncNeutralizeCommentVote(threadId, commentId) {
    return async (dispatch, getState) => {
        const authUser = JSON.parse(localStorage.getItem('authUser'));
        const { threadDetail } = getState();

        // Optimistic update
        dispatch(neutralizeCommentVoteActionCreator(threadId, commentId, authUser.id));

        try {
            await api.neutralizeCommentVote(threadId, commentId);
        } catch (error) {
            // Revert on failure
            dispatch(getThreadDetailActionCreator(threadDetail));
            alert(error.message);
        }
    };
}

export {
    ActionType,
    getThreadDetailActionCreator,
    asyncGetThreadDetail,
    createCommentActionCreator,
    asyncCreateComment,
    upVoteThreadActionCreator,
    asyncUpVoteThread,
    downVoteThreadActionCreator,
    asyncDownVoteThread,
    neutralizeThreadVoteActionCreator,
    asyncNeutralizeThreadVote,
    upVoteCommentActionCreator,
    asyncUpVoteComment,
    downVoteCommentActionCreator,
    asyncDownVoteComment,
    neutralizeCommentVoteActionCreator,
    asyncNeutralizeCommentVote,
};