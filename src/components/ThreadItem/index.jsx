import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';
import { useSelector } from 'react-redux';
import { asyncDownVoteThread, asyncNeutralizeThreadVote, asyncUpVoteThread } from '../../states/vote/action';
import { useDispatch } from 'react-redux';
import Avatar from '../Avatar';

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
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
            <div className="p-6">
                <div className="flex items-center space-x-4 mb-5">
                    <Avatar name={thread.owner} />
                    <div>
                        <h3 className="font-bold text-blue-900">{thread.ownerId}</h3>
                        <p className="text-sm text-blue-600/70">{createdAt}</p>
                    </div>
                </div>
                <div className="mb-4 cursor-pointer transform hover:scale-[1.01] transition-transform duration-200" role='button' tabIndex={0} onClick={onThreadClick} onKeyDown={onThreadPress}>
                    <h2 className="text-2xl font-bold mb-3 text-blue-900 hover:text-blue-700 transition-colors">{thread.title}</h2>
                    <p className="mb-3 text-gray-700 line-clamp-2 leading-relaxed">{thread.body}</p>
                    <span className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full px-4 py-1.5 text-sm font-medium shadow-sm">
                        #{thread.category}
                    </span>
                </div>
                <div className="flex items-center justify-between text-gray-600 mt-6 pt-4 border-t border-blue-100">
                    <div className="flex items-center space-x-6">
                        <button className={`flex items-center space-x-2 cursor-pointer transition-colors duration-200 ${isThreadUpVoted ? 'text-blue-600' : 'hover:text-blue-600'}`}
                            onClick={onThreadUpVoteClick}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                            </svg>
                            <span className="font-medium">{thread.upVotesBy.length} upvotes</span>
                        </button>
                        <button className={`flex items-center space-x-2 cursor-pointer transition-colors duration-200 ${isThreadDownVoted ? 'text-red-500' : 'hover:text-red-500'}`}
                            onClick={onThreadDownVoteClick}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                            <span className="font-medium">{thread.downVotesBy.length} downvotes</span>
                        </button>
                        <button className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span className="font-medium">{thread.totalComments} Comments</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThreadItem;