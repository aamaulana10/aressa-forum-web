import { ActionType } from "./action";

function voteReducer(votes = [], action = {}) {
    switch (action.type) {
        case ActionType.UP_VOTE_THREAD:
            return votes.map((vote) => {
                if (vote.threadId === action.payload.threadId) {
                    return {
                        ...vote,
                        upVotesBy: vote.upVotesBy.concat([action.payload.userId]),
                        downVotesBy: vote.downVotesBy.filter((id) => id !== action.payload.userId)
                    };
                }
                return vote;
            });
        case ActionType.DOWN_VOTE_THREAD:
            return votes.map((vote) => {
                if (vote.threadId === action.payload.threadId) {
                    return {
                        ...vote,
                        downVotesBy: vote.downVotesBy.concat([action.payload.userId]),
                        upVotesBy: vote.upVotesBy.filter((id) => id !== action.payload.userId)
                    };
                }
                return vote;
            });
        case ActionType.UP_VOTE_COMMENT:
            return votes.map((vote) => {
                if (vote.threadId === action.payload.threadId && vote.commentId === action.payload.commentId) {
                    return {
                        ...vote,
                        upVotesBy: vote.upVotesBy.concat([action.payload.userId]),
                        downVotesBy: vote.downVotesBy.filter((id) => id !== action.payload.userId)
                    };
                }
                return vote;
            });
        case ActionType.DOWN_VOTE_COMMENT:
            return votes.map((vote) => {
                if (vote.threadId === action.payload.threadId && vote.commentId === action.payload.commentId) {
                    return {
                        ...vote,
                        downVotesBy: vote.downVotesBy.concat([action.payload.userId]),
                        upVotesBy: vote.upVotesBy.filter((id) => id !== action.payload.userId)
                    };
                }
                return vote;
            });
        case ActionType.NEUTRALIZE_THREAD_VOTE:
            return votes.map((vote) => {
                if (vote.threadId === action.payload.threadId) {
                    return {
                        ...vote,
                        upVotesBy: vote.upVotesBy.filter((id) => id !== action.payload.userId),
                        downVotesBy: vote.downVotesBy.filter((id) => id !== action.payload.userId)
                    };
                }
                return vote;
            });
        case ActionType.NEUTRALIZE_COMMENT_VOTE:
            return votes.map((vote) => {
                if (vote.threadId === action.payload.threadId && vote.commentId === action.payload.commentId) {
                    return {
                        ...vote,
                        upVotesBy: vote.upVotesBy.filter((id) => id !== action.payload.userId),
                        downVotesBy: vote.downVotesBy.filter((id) => id !== action.payload.userId)
                    };
                }
                return vote;
            });
        default:
            return votes;
    }
}

export default voteReducer;