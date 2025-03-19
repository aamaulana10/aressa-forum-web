function ThreadInput() {
    return (
        <div className="bg-white rounded-lg shadow p-4 mb-6">
            <div className="flex space-x-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                <div className="flex-1">
                    <textarea
                        placeholder="What's New?"
                        className="w-full bg-gray-100 rounded-lg px-4 py-2 min-h-[100px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        style={{ height: 'auto' }}
                    // onChange={(e) => {
                    //     e.target.style.height = 'auto';
                    //     e.target.style.height = e.target.scrollHeight + 'px';
                    // }}
                    />
                    <div className="flex justify-end mt-3">
                        <button
                            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-200 flex items-center space-x-2 font-medium"
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