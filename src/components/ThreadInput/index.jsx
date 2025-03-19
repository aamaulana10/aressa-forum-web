function ThreadInput() {
    return (
        <div className="bg-white rounded-lg shadow p-4 mb-6">
            <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                <input
                    type="text"
                    placeholder="What's New?"
                    className="flex-1 bg-gray-100 rounded-full px-6 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    )
}

export default ThreadInput;