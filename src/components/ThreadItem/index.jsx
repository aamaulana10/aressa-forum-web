import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';
import { useSelector } from 'react-redux';
import { asyncDownVoteThread, asyncNeutralizeThreadVote, asyncUpVoteThread } from '../../states/vote/action';
import { useDispatch } from 'react-redux';

function ThreadItem({ thread }) {
    const navigate = useNavigate();
    const createdAt = formatDate(thread.createdAt);
    const {
        authUser = null
    } = useSelector((states) => states);
    const dispatch = useDispatch();

    const onThreadClick = () => {
        navigate(`/threads/${thread.id}`);
    };

    const onThreadPress = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            navigate(`/threads/${thread.id}`);
        }
    };

    const isThreadUpVoted = thread?.upVotesBy.includes(authUser.id);
    const isThreadDownVoted = thread?.downVotesBy.includes(authUser.id);

    const onThreadUpVoteClick = () => {
        if (isThreadUpVoted) {
            dispatch(asyncNeutralizeThreadVote(thread.id, authUser.id));
        }
        else {
            dispatch(asyncUpVoteThread(thread.id, authUser.id));
        }
    };

    const onThreadDownVoteClick = () => {
        if (isThreadDownVoted) {
            dispatch(asyncNeutralizeThreadVote(thread.id, authUser.id));
        } else {
            dispatch(asyncDownVoteThread(thread.id, authUser.id));
        }
    };

    return (
        <div className="bg-white rounded-lg shadow">
            <div className="p-4">
                <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                    <div>
                        <h3 className="font-semibold">{thread.ownerId}</h3>
                        <p className="text-sm text-gray-500">{createdAt}</p>
                    </div>
                </div>
                <div className="mb-2" role='button' tabIndex={0} onClick={onThreadClick} onKeyDown={onThreadPress}>
                    <h2 className="text-xl font-bold mb-2">{thread.title}</h2>
                    <p className="mb-2 text-gray-600 line-clamp-2">{thread.body}</p>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                        #{thread.category}
                    </span>
                </div>
                <div className="flex items-center justify-between text-gray-500 mt-4 pt-4 border-t">
                    <div className="flex items-center space-x-4">
                        <button className={`flex items-center space-x-2 cursor-pointer ${isThreadUpVoted ? 'text-blue-500' : ''}`}
                            onClick={onThreadUpVoteClick}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                            </svg>
                            <span>{thread.upVotesBy.length} upvotes</span>
                        </button>
                        <button className={`flex items-center space-x-2 cursor-pointer ${isThreadDownVoted ? 'text-blue-500' : ''}`}
                            onClick={onThreadDownVoteClick}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                            <span>{thread.downVotesBy.length} downvotes</span>
                        </button>
                        <button className="flex items-center space-x-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span>{thread.totalComments} Comments</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThreadItem;