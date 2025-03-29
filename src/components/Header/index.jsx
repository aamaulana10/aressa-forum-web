import PropTypes from 'prop-types';
import React from 'react';

Header.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func,
    onLogout: PropTypes.func,
    userName: PropTypes.string,
    onCreateThreadClick: PropTypes.func,
};

function Header({ isOpen, setIsOpen, onLogout, userName, onCreateThreadClick }) {
    return (
        <div className={`fixed ${isOpen ? 'w-[calc(100%-16rem)]' : 'w-full'} bg-white shadow-sm p-4 border-b border-gray-100`}>
            <div className="flex items-center justify-between gap-4">
                <div className="flex-1 flex items-center gap-4">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <button
                        onClick={onCreateThreadClick}
                        className="flex items-center gap-2 px-6 py-2.5 bg-[#7857ED] text-white rounded-lg hover:bg-[#6745D8] transition-colors duration-200 font-medium">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                        <span>Create Thread</span>
                    </button>
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