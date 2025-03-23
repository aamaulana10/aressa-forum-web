import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';
import { useSelector, useDispatch } from 'react-redux';
import {
    asyncGetThreadDetail,
    asyncCreateComment
} from '../../states/threadDetail/action';
import CommentInput from '../../components/CommentInput';
import { asyncGetAuthUser } from '../../states/authUser/action';
import {
    asyncDownVoteComment,
    asyncDownVoteThreadDetail, asyncNeutralizeCommentVote,
    asyncNeutralizeThreadDetailVote, asyncUpVoteComment,
    asyncUpVoteThreadDetail
} from '../../states/vote/action';
import Avatar from '../../components/Avatar';

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
        console.log('isThreadUpVoted ', isThreadUpVoted);

        if (isThreadUpVoted) {
            dispatch(asyncNeutralizeThreadDetailVote(threadDetail.id, authUser.id));
        }
        else {
            dispatch(asyncUpVoteThreadDetail(threadDetail.id, authUser.id));
        }
    };

    const onThreadDownVoteClick = () => {
        if (isThreadDownVoted) {
            dispatch(asyncNeutralizeThreadDetailVote(threadDetail.id, authUser.id));
        } else {
            dispatch(asyncDownVoteThreadDetail(threadDetail.id, authUser.id));
        }
    };

    const onCommentUpVoteClick = (commentId, isCommentUpVoted) => {

        if (isCommentUpVoted) {
            dispatch(asyncNeutralizeCommentVote(threadDetail.id, commentId, authUser.id));
        } else {
            dispatch(asyncUpVoteComment(threadDetail.id, commentId, authUser.id));
        }
    }

    const onCommentDownVoteClick = (commentId, isCommentDownVoted) => {
        if (isCommentDownVoted) {
            dispatch(asyncNeutralizeCommentVote(threadDetail.id, commentId, authUser.id));
        } else {
            dispatch(asyncDownVoteComment(threadDetail.id, commentId, authUser.id));
        }
    }

    useEffect(() => {
        dispatch(asyncGetAuthUser());
        dispatch(asyncGetThreadDetail(id));
    }, [id, dispatch]);

    if (!threadDetail) {
        return <div className="p-4">Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center space-x-3 mb-6">
                    <Avatar name={threadDetail.owner.name} />
                    <div>
                        <h3 className="font-semibold text-lg text-gray-800">{threadDetail.owner.name}</h3>
                        <p className="text-sm text-gray-500">{formatDate(threadDetail.createdAt)}</p>
                    </div>
                </div>

                <h1 className="text-3xl font-bold mb-4 text-gray-900 leading-tight">{threadDetail.title}</h1>
                <p className="text-gray-700 mb-6 leading-relaxed">{threadDetail.body}</p>

                <div className="flex items-center space-x-4 text-gray-600">
                    <button
                        onClick={onThreadUpVoteClick}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 hover:bg-blue-50 ${isThreadUpVoted ? 'text-blue-600 bg-blue-50' : ''}`}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                        </svg>
                        <span>{threadDetail.upVotesBy.length} upvotes</span>
                    </button>
                    <button
                        onClick={onThreadDownVoteClick}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 hover:bg-red-50 ${isThreadDownVoted ? 'text-red-600 bg-red-50' : ''}`}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                        <span>{threadDetail.downVotesBy.length} downvotes</span>
                    </button>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Comments ({threadDetail.comments.length})</h2>
                <CommentInput createComment={(content) => dispatch(asyncCreateComment(id, content))} />
                <div className="space-y-6">
                    {threadDetail.comments.map((comment) => {
                        const isCommentUpVoted = comment.upVotesBy.includes(authUser.id);
                        const isCommentDownVoted = comment.downVotesBy.includes(authUser.id);

                        return (
                            <div key={comment.id} className="bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-lg">
                                <div className="flex items-center space-x-3 mb-4">
                                    <Avatar name={comment.owner.name} />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">{comment.owner.name}</h3>
                                        <p className="text-sm text-gray-500">{formatDate(comment.createdAt)}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-4 leading-relaxed">{comment.content}</p>
                                <div className="flex items-center space-x-4 text-gray-600">
                                    <button
                                        onClick={() => onCommentUpVoteClick(comment.id, isCommentUpVoted)}
                                        className={`flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm transition-all duration-200 hover:bg-blue-50 ${isCommentUpVoted ? 'text-blue-600 bg-blue-50' : ''}`}
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                                        </svg>
                                        <span>{comment.upVotesBy.length} upvotes</span>
                                    </button>
                                    <button
                                        onClick={() => onCommentDownVoteClick(comment.id, isCommentDownVoted)}
                                        className={`flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm transition-all duration-200 hover:bg-red-50 ${isCommentDownVoted ? 'text-red-600 bg-red-50' : ''}`}
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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