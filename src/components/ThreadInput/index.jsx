import { useState } from "react";

function ThreadInput({ createThread }) {
    const [hasError, setHasError] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [category, setCategory] = useState('');

    function onCreateThread() {
        if (title.trim() && body.trim()) {
            createThread(title, body, category);
            setTitle('');
            setBody('');
            setCategory('');
        } else {
            setHasError(true);
        }
    }

    return (
        <div className="bg-white rounded-lg shadow p-4 mb-6">
            <div className="flex space-x-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                <div className="flex-1 space-y-4">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-lg font-semibold"
                    />
                    <textarea
                        placeholder="What's on your mind?"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        className="w-full bg-gray-100 rounded-lg px-4 py-2 min-h-[100px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                    <div className="flex items-center space-x-2">
                        <span className="text-gray-400">#</span>
                        <input
                            type="text"
                            placeholder="Add category (optional)"
                            value={category.replace('#', '')}
                            onChange={(e) => setCategory(e.target.value)}
                            className="flex-1 bg-gray-100 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-blue-500"
                        />
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        <div className="text-sm text-gray-500">
                            {hasError && !title && <span>Title is required</span>}
                            {hasError && !body && <span>Content is required</span>}
                        </div>
                        <button
                            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-200 flex items-center space-x-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={onCreateThread}
                            disabled={!title.trim() || !body.trim()}
                        >
                            <span>Post</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreadInput;