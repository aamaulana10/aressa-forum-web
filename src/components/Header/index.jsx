function Header({ isOpen, setIsOpen, onLogout, userName }) {
    return (
        <div className={`fixed ${isOpen ? 'w-[calc(100%-16rem)]' : 'w-full'} bg-white shadow-sm p-4 border-b border-gray-100`}>
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div className="relative flex-1 max-w-2xl">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#7857ED] focus:outline-none transition-all duration-200"
                        />
                        <svg className="absolute w-5 h-5 text-gray-400 left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <span className="text-gray-700">Welcome, <span className="font-medium">{userName}</span></span>
                    <button
                        onClick={() => onLogout()}
                        className="px-4 py-2 text-gray-700 hover:text-[#7857ED] hover:bg-gray-100 rounded-lg transition-all duration-200">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;