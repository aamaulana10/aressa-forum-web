import api from "../../service/api";
import { getAllThreadActionCreator } from "../threads/action";
import { getThreadDetailActionCreator } from "../threadDetail/action";

const ActionType = {
    UP_VOTE_THREAD: 'UP_VOTE_THREAD',
    DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD',
    UP_VOTE_COMMENT: 'UP_VOTE_COMMENT',
    DOWN_VOTE_COMMENT: 'DOWN_VOTE_COMMENT',
    NEUTRALIZE_THREAD_VOTE: 'NEUTRALIZE_THREAD_VOTE',
    NEUTRALIZE_COMMENT_VOTE: 'NEUTRALIZE_COMMENT_VOTE',
};

function upVoteThreadActionCreator(threadId, userId) {
    return {
        type: ActionType.UP_VOTE_THREAD,
        payload: {
            threadId,
            userId,
        },
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

function neutralizeThreadVoteActionCreator(threadId, userId) {
    return {
        type: ActionType.NEUTRALIZE_THREAD_VOTE,
        payload: {
            threadId,
            userId,
        },
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

function asyncUpVoteThread(threadId, userId,) {
    return async (dispatch) => {
        dispatch(upVoteThreadActionCreator(threadId, userId));
        try {
            await api.upVoteThread(threadId);
            const [threads, users] = await Promise.all([
                api.getAllThreads(),
                api.getAllUsers()
            ]);
            const threadsWithOwner = threads.map(thread => ({
                ...thread,
                owner: users.find(user => user.id === thread.ownerId) || thread.owner
            }));
            dispatch(getAllThreadActionCreator(threadsWithOwner));
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncUpVoteThreadDetail(threadId, userId) {
    return async (dispatch) => {
        dispatch(upVoteThreadActionCreator(threadId, userId));
        try {
            await api.upVoteThread(threadId);
            const threadDetail = await api.getThreadDetail(threadId);
            dispatch(getThreadDetailActionCreator(threadDetail));
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncDownVoteThread(threadId, userId) {
    return async (dispatch) => {
        dispatch(downVoteThreadActionCreator(threadId, userId));
        try {
            await api.downVoteThread(threadId);
            const [threads, users] = await Promise.all([
                api.getAllThreads(),
                api.getAllUsers()
            ]);
            const threadsWithOwner = threads.map(thread => ({
                ...thread,
                owner: users.find(user => user.id === thread.ownerId) || thread.owner
            }));
            dispatch(getAllThreadActionCreator(threadsWithOwner));
        } catch (error) {
            alert(error.message);
        }
    };
}
function asyncDownVoteThreadDetail(threadId, userId) {
    return async (dispatch) => {
        dispatch(downVoteThreadActionCreator(threadId, userId));
        try {
            await api.downVoteThread(threadId);
            const threadDetail = await api.getThreadDetail(threadId);
            dispatch(getThreadDetailActionCreator(threadDetail));
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncUpVoteComment(threadId, commentId, userId) {
    return async (dispatch) => {
        dispatch(upVoteCommentActionCreator(threadId, commentId, userId));
        try {
            await api.upVoteComment(threadId, commentId);
            const threadDetail = await api.getThreadDetail(threadId);
            dispatch(getThreadDetailActionCreator(threadDetail));
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncDownVoteComment(threadId, commentId, userId) {
    return async (dispatch) => {
        dispatch(downVoteCommentActionCreator(threadId, commentId, userId));
        try {
            await api.downVoteComment(threadId, commentId);
            const threadDetail = await api.getThreadDetail(threadId);
            dispatch(getThreadDetailActionCreator(threadDetail));
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncNeutralizeThreadVote(threadId, userId) {
    return async (dispatch) => {
        dispatch(neutralizeThreadVoteActionCreator(threadId, userId));
        try {
            await api.neutralizeThreadVote(threadId);
            const [threads, users] = await Promise.all([
                api.getAllThreads(),
                api.getAllUsers()
            ]);
            const threadsWithOwner = threads.map(thread => ({
                ...thread,
                owner: users.find(user => user.id === thread.ownerId) || thread.owner
            }));
            dispatch(getAllThreadActionCreator(threadsWithOwner));
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncNeutralizeThreadDetailVote(threadId, userId) {
    return async (dispatch) => {
        dispatch(neutralizeThreadVoteActionCreator(threadId, userId));
        try {
            await api.neutralizeThreadVote(threadId);
            const threadDetail = await api.getThreadDetail(threadId)
            dispatch(getThreadDetailActionCreator(threadDetail));
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncNeutralizeCommentVote(threadId, commentId, userId) {
    return async (dispatch) => {
        dispatch(neutralizeCommentVoteActionCreator(threadId, commentId, userId));
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
    upVoteThreadActionCreator,
    downVoteThreadActionCreator,
    upVoteCommentActionCreator,
    downVoteCommentActionCreator,
    neutralizeThreadVoteActionCreator,
    neutralizeCommentVoteActionCreator,
    asyncUpVoteThread,
    asyncDownVoteThread,
    asyncUpVoteThreadDetail,
    asyncDownVoteThreadDetail,
    asyncUpVoteComment,
    asyncDownVoteComment,
    asyncNeutralizeThreadVote,
    asyncNeutralizeThreadDetailVote,
    asyncNeutralizeCommentVote
}