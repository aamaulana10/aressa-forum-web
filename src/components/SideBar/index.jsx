import { Link } from 'react-router-dom';
function SideBar({ isOpen }) {

    return (
        <div className={`h-screen bg-white shadow-lg transition-all duration-300 ${isOpen ? 'w-64' : 'w-0'} overflow-hidden`}>
            <div className="p-6">
                <div className="flex items-center space-x-2 mb-8">
                    <span className="text-xl font-bold">🎯 Aressa</span>
                </div>

                <div className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-500 mb-4">Main Menu</h3>
                    <nav>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="flex items-center space-x-2 p-2 rounded-lg text-gray-600 hover:bg-gray-100">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                    <span>Thread</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-gray-500 mb-4">Explore</h3>
                    <nav>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/trendings" className="flex items-center space-x-2 p-2 rounded-lg text-gray-600 hover:bg-gray-100">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span>Trending</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/leaderboards" className="flex items-center space-x-2 p-2 rounded-lg text-gray-600 hover:bg-gray-100">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                    <span>Leaderboard</span>
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