import { ActionType } from './action';

function threadDetailReducer(threadDetail = null, action = {}) {
    switch (action.type) {
        case ActionType.GET_THREAD_DETAIL:
            return action.payload.threadDetail;
        case ActionType.UP_VOTE_COMMENT:
            return {
                ...threadDetail,
                comments: threadDetail.comments.map((comment) => {
                    if (comment.id === action.payload.commentId) {
                        return {
                            ...comment,
                            upVotesBy: comment.upVotesBy.concat([action.payload.userId]),
                            downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId),
                        };
                    }
                    return comment;
                }),
            };
        case ActionType.DOWN_VOTE_COMMENT:
            return {
                ...threadDetail,
                comments: threadDetail.comments.map((comment) => {
                    if (comment.id === action.payload.commentId) {
                        return {
                            ...comment,
                            downVotesBy: comment.downVotesBy.concat([action.payload.userId]),
                            upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
                        };
                    }
                    return comment;
                }),
            };
        case ActionType.NEUTRALIZE_COMMENT_VOTE:
            return {
                ...threadDetail,
                comments: threadDetail.comments.map((comment) => {
                    if (comment.id === action.payload.commentId) {
                        return {
                            ...comment,
                            upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
                            downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId),
                        };
                    }
                    return comment;
                }),
            };
        default:
            return threadDetail;
    }
}

export default threadDetailReducer;