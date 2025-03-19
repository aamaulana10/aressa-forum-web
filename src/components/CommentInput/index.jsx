import { useState } from 'react';

function CommentInput({ createComment }) {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!content.trim()) return;

        createComment(content);
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-4 mb-6">
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your comment..."
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] resize-none"
            />
            <div className="flex justify-end mt-3">
                <button
                    type="submit"
                    disabled={!content.trim()}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    Submit Comment
                </button>
            </div>
        </form>
    );
}

export default CommentInput;