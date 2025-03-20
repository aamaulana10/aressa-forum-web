import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';
import { useSelector, useDispatch } from 'react-redux';
import {
    asyncGetThreadDetail,
    asyncCreateComment,
    asyncUpVoteThread,
    asyncDownVoteThread,
    asyncNeutralizeThreadVote,
    asyncUpVoteComment,
    asyncDownVoteComment,
    asyncNeutralizeCommentVote
} from '../../states/threadDetail/action';
import CommentInput from '../../components/CommentInput';
import { asyncGetAuthUser } from '../../states/authUser/action';

function DetailThread() {
    const { id } = useParams();
    const {
        threadDetail = null,
        authUser = null,
    } = useSelector((states) => states);

    const dispatch = useDispatch();

    const isThreadUpVoted = threadDetail?.upVotesBy.includes(authUser.id);
    const isThreadDownVoted = threadDetail?.downVotesBy.includes(authUser.id);

    const onThreadUpVoteClick = () => {
        if (isThreadDownVoted) {
            dispatch(asyncNeutralizeThreadVote(id));
        }
        if (isThreadUpVoted) {
            dispatch(asyncNeutralizeThreadVote(id));
        } else {
            dispatch(asyncUpVoteThread(id));
        }
    };

    const onThreadDownVoteClick = () => {
        if (isThreadUpVoted) {
            dispatch(asyncNeutralizeThreadVote(id));
        }
        if (isThreadDownVoted) {
            dispatch(asyncNeutralizeThreadVote(id));
        } else {
            dispatch(asyncDownVoteThread(id));
        }
    };

    useEffect(() => {
        dispatch(asyncGetAuthUser());
        dispatch(asyncGetThreadDetail(id));
    }, [id, dispatch]);

    if (!threadDetail) {
        return <div className="p-4">Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                    <div>
                        <h3 className="font-semibold">{threadDetail.owner.name}</h3>
                        <p className="text-sm text-gray-500">{formatDate(threadDetail.createdAt)}</p>
                    </div>
                </div>

                <h1 className="text-3xl font-bold mb-4">{threadDetail.title}</h1>
                <p className="text-gray-700 mb-6">{threadDetail.body}</p>

                <div className="flex items-center space-x-4 text-gray-500">
                    <button
                        onClick={onThreadUpVoteClick}
                        className={`flex items-center space-x-2 ${isThreadUpVoted ? 'text-blue-500' : ''}`}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                        </svg>
                        <span>{threadDetail.upVotesBy.length} upvotes</span>
                    </button>
                    <button
                        onClick={onThreadDownVoteClick}
                        className={`flex items-center space-x-2 ${isThreadDownVoted ? 'text-red-500' : ''}`}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                        <span>{threadDetail.downVotesBy.length} downvotes</span>
                    </button>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-6">Comments ({threadDetail.comments.length})</h2>
                <CommentInput createComment={(content) => dispatch(asyncCreateComment(id, content))} />
                <div className="space-y-6">
                    {threadDetail.comments.map((comment) => {
                        const isCommentUpVoted = comment.upVotesBy.includes(authUser.id);
                        const isCommentDownVoted = comment.downVotesBy.includes(authUser.id);

                        const onCommentUpVoteClick = () => {
                            if (isCommentDownVoted) {
                                dispatch(asyncNeutralizeCommentVote(id, comment.id));
                            }
                            if (isCommentUpVoted) {
                                dispatch(asyncNeutralizeCommentVote(id, comment.id));
                            } else {
                                dispatch(asyncUpVoteComment(id, comment.id, authUser.id));
                            }
                        };

                        const onCommentDownVoteClick = () => {
                            if (isCommentUpVoted) {
                                dispatch(asyncNeutralizeCommentVote(id, comment.id));
                            }
                            if (isCommentDownVoted) {
                                dispatch(asyncNeutralizeCommentVote(id, comment.id));
                            } else {
                                dispatch(asyncDownVoteComment(id, comment.id));
                            }
                        };

                        return (
                            <div key={comment.id} className="bg-white rounded-lg shadow p-4">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                                    <div>
                                        <h3 className="font-semibold">{comment.owner.name}</h3>
                                        <p className="text-sm text-gray-500">{formatDate(comment.createdAt)}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-4">{comment.content}</p>
                                <div className="flex items-center space-x-4 text-gray-500">
                                    <button
                                        onClick={onCommentUpVoteClick}
                                        className={`flex items-center space-x-2 ${isCommentUpVoted ? 'text-blue-500' : ''}`}
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                                        </svg>
                                        <span>{comment.upVotesBy.length} upvotes</span>
                                    </button>
                                    <button
                                        onClick={onCommentDownVoteClick}
                                        className={`flex items-center space-x-2 ${isCommentDownVoted ? 'text-red-500' : ''}`}
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                        <span>{comment.downVotesBy.length} downvotes</span>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default DetailThread;