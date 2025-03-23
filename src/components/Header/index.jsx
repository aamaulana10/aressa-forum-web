function Header({ isOpen, setIsOpen, onLogout, userName }) {
    return (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm py-4 px-6 border-b border-blue-100">
            <div className="mx-auto flex items-center">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-lg hover:bg-blue-100/50 transition-colors duration-200">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <h3 className="flex-1 text-right font-medium text-blue-900">
                    Hey <span className="font-bold">{userName}</span>! 👋 Welcome to the forum
                </h3>
                <button
                    onClick={() => onLogout()}
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 m-4 rounded-full hover:shadow-md transition-all duration-200 flex items-center space-x-2 font-medium">
                    <p>Logout</p>
                </button>
            </div>
        </div>
    )
}

export default Header;