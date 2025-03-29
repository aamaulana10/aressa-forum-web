import PropTypes from 'prop-types';
import { React, useState } from 'react';

CreateThreadModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    createThread: PropTypes.func,
};
function CreateThreadModal({ isOpen, onClose, createThread }) {
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
            onClose();
        } else {
            setHasError(true);
        }
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div
                    className="fixed inset-0 bg-gray-500/50 backdrop-blur-sm transition-opacity"
                    onClick={onClose}
                />

                <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-semibold leading-6 text-gray-900">
                                        Create New Thread
                                    </h3>
                                    <button
                                        onClick={onClose}
                                        className="text-gray-400 hover:text-gray-500"
                                    >
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7857ED] transition-all text-lg font-semibold"
                                    />
                                    <textarea
                                        placeholder="What's on your mind?"
                                        value={body}
                                        onChange={(e) => setBody(e.target.value)}
                                        className="w-full bg-gray-100 rounded-lg px-4 py-2 min-h-[100px] resize-none focus:outline-none focus:ring-2 focus:ring-[#7857ED] transition-all"
                                    />
                                    <div className="flex items-center space-x-2">
                                        <span className="text-gray-400">#</span>
                                        <input
                                            type="text"
                                            placeholder="Add category (optional)"
                                            value={category.replace('#', '')}
                                            onChange={(e) => setCategory(e.target.value)}
                                            className="flex-1 bg-gray-100 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#7857ED] transition-all text-[#7857ED]"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center mt-3">
                                        <div className="text-sm text-gray-500">
                                            {hasError && !title && <span>Title is required • </span>}
                                            {hasError && !body && <span>Content is required</span>}
                                        </div>
                                        <button
                                            className="bg-[#7857ED] text-white px-6 py-2 rounded-full hover:bg-[#6745D8] transition-colors duration-200 flex items-center space-x-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateThreadModal;