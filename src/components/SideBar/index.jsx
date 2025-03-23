import { Link } from 'react-router-dom';
function SideBar({ isOpen }) {

    return (
        <div className={`h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 shadow-xl transition-all duration-500 ease-in-out transform ${isOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full'} overflow-hidden border-r border-blue-100`}>
            <div className="p-6">
                <div className="flex items-center space-x-3 mb-8 bg-white/60 p-3 rounded-lg backdrop-blur-sm shadow-sm">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">🎯 Aressa</span>
                </div>

                <div className="mb-8">
                    <h3 className="text-sm font-semibold text-blue-600/80 mb-4 px-2">Main Menu</h3>
                    <nav>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="flex items-center space-x-3 p-2.5 rounded-lg text-gray-700 hover:bg-white/60 hover:shadow-sm transition-all duration-300 group backdrop-blur-sm">
                                    <svg className="w-5 h-5 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                    <span className="font-medium group-hover:text-blue-600 transition-colors duration-300">Thread</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-blue-600/80 mb-4 px-2">Explore</h3>
                    <nav>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/trendings" className="flex items-center space-x-3 p-2.5 rounded-lg text-gray-700 hover:bg-white/60 hover:shadow-sm transition-all duration-300 group backdrop-blur-sm">
                                    <svg className="w-5 h-5 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="font-medium group-hover:text-blue-600 transition-colors duration-300">Trending</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/leaderboards" className="flex items-center space-x-3 p-2.5 rounded-lg text-gray-700 hover:bg-white/60 hover:shadow-sm transition-all duration-300 group backdrop-blur-sm">
                                    <svg className="w-5 h-5 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                    <span className="font-medium group-hover:text-blue-600 transition-colors duration-300">Leaderboard</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default SideBar;