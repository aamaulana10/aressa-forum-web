import { useState } from 'react';

function CommentInput({ createComment }) {
    const [content, setContent] = useState('');

    function onContentChange({ target }) {
        setContent(target.value);
    }

    function onSubmit() {
        if (!content) {
            return;
        }

        createComment(content);
        setContent('');
    }

    return (
        <div className="mb-6">
            <div className="bg-white rounded-lg border border-gray-100 p-4">
                <textarea
                    className="w-full p-3 mb-4 bg-gray-50 rounded-lg border-0 focus:ring-2 focus:ring-[#7857ED] focus:bg-white transition-all duration-200 placeholder-gray-400"
                    rows="4"
                    placeholder="Write your comment here..."
                    value={content}
                    onChange={onContentChange}
                />
                <div className="flex justify-end">
                    <button
                        className="px-4 py-2 bg-[#7857ED] text-white rounded-lg hover:bg-[#6745D8] transition-all duration-200 flex items-center gap-2"
                        onClick={onSubmit}
                    >
                        <span>Submit</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CommentInput;