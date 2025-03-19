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
        try {
            const threadDetail = await api.getThreadDetail(threadId);
            dispatch(getThreadDetailActionCreator(threadDetail));
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncCreateComment(threadId, content) {
    return async (dispatch) => {
        try {
            await api.createComment(threadId, content);
            const threadDetail = await api.getThreadDetail(threadId);
            dispatch(getThreadDetailActionCreator(threadDetail));
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncUpVoteThread(threadId) {
    return async (dispatch) => {
        try {
            await api.upVoteThread(threadId);
            const threadDetail = await api.getThreadDetail(threadId);
            dispatch(getThreadDetailActionCreator(threadDetail));
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncDownVoteThread(threadId) {
    return async (dispatch) => {
        try {
            await api.downVoteThread(threadId);
            const threadDetail = await api.getThreadDetail(threadId);
            dispatch(getThreadDetailActionCreator(threadDetail));
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncNeutralizeThreadVote(threadId) {
    return async (dispatch) => {
        try {
            await api.neutralizeThreadVote(threadId);
            const threadDetail = await api.getThreadDetail(threadId);
            dispatch(getThreadDetailActionCreator(threadDetail));
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncUpVoteComment(threadId, commentId) {
    return async (dispatch) => {
        try {
            await api.upVoteComment(threadId, commentId);
            const threadDetail = await api.getThreadDetail(threadId);
            dispatch(getThreadDetailActionCreator(threadDetail));
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncDownVoteComment(threadId, commentId) {
    return async (dispatch) => {
        try {
            await api.downVoteComment(threadId, commentId);
            const threadDetail = await api.getThreadDetail(threadId);
            dispatch(getThreadDetailActionCreator(threadDetail));
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncNeutralizeCommentVote(threadId, commentId) {
    return async (dispatch) => {
        try {
            await api.neutralizeCommentVote(threadId, commentId);
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
    asyncCreateComment,
    asyncUpVoteThread,
    asyncDownVoteThread,
    asyncNeutralizeThreadVote,
    asyncUpVoteComment,
    asyncDownVoteComment,
    asyncNeutralizeCommentVote,
};