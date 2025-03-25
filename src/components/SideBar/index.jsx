import { Link } from 'react-router-dom';

function SideBar({ isOpen }) {
    return (
        <aside className={`h-full w-64 fixed bg-white shadow-xl transition-all duration-500 ease-in-out transform ${isOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full'} border-r border-gray-100`}>
            <div className="p-4">
                <div className="flex items-center space-x-3 mb-8">
                    <span className="text-xl font-bold text-[#7857ED]">Aressa Forum</span>
                </div>

                <nav className="space-y-1">
                    <Link to="/" className="flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100 group">
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span>Home</span>
                    </Link>

                    <Link to="/leaderboard" className="flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100 group">
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <span>Leaderboard</span>
                    </Link>
                </nav>
            </div>
        </aside>
    );
}

export default SideBar;