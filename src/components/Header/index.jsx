function Header({ isOpen, setIsOpen, onLogout, userName }) {
    return (
        <div className="mx-auto flex items-center">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="mb-4 p-2 rounded-lg hover:bg-gray-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            <h3 className="flex-1 text-right">
                Hello, welcome to the forum {userName}!
            </h3>
            <button
                onClick={() => onLogout()}
                className="text-blue-500 px-6 py-2 m-4 rounded-full hover:bg-blue-100 transition-colors duration-200 flex items-center space-x-2 font-medium ">
                <p>Logout</p>
            </button>
        </div>
    )
}

export default Header;