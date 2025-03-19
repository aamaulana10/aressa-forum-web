function InfoPanel() {
    return (
        <div className="hidden lg:block w-80 p-6 space-y-8">
            {/* Upcoming Events */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold">Upcoming Events</h2>
                    <button className="text-gray-500 hover:text-gray-700">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </button>
                </div>
                <div className="space-y-4">
                    {upcomingEvents.map(event => (
                        <div key={event.id} className="flex items-center space-x-4 bg-white p-3 rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-medium">{event.title}</h3>
                                <p className="text-sm text-gray-500">{event.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Groups */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold">Groups</h2>
                    <span className="text-sm text-gray-500">{groups.length}</span>
                </div>
                <div className="space-y-4">
                    {groups.map(group => (
                        <div key={group.id} className="flex items-center space-x-3">
                            <span className="text-2xl">{group.avatar}</span>
                            <div>
                                <h3 className="font-medium">{group.name}</h3>
                                <p className="text-sm text-gray-500">{group.subscribers}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contacts */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold">Contacts</h2>
                    <span className="text-sm text-gray-500">{contacts.length}</span>
                </div>
                <div className="space-y-4">
                    {contacts.map(contact => (
                        <div key={contact.id} className="flex items-center space-x-3">
                            <div className="relative">
                                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                                {contact.online && (
                                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                                )}
                            </div>
                            <span className="font-medium">{contact.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Advertising */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold">Advertising</h2>
                    <button className="text-gray-500 hover:text-gray-700">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <img src="https://source.unsplash.com/random/800x600?shoes,nike" alt="Nike Shoes" className="w-full h-32 object-cover rounded-lg mb-3" />
                    <p className="font-medium mb-1">Special offer: 20% off today</p>
                    <p className="text-sm text-gray-500 mb-2">Comfort is king, but that doesn't mean you have to sacrifice style.</p>
                    <a href="http://nike.com" className="text-blue-500 text-sm hover:underline">http://nike.com</a>
                </div>
            </div>

            {/* Birthdays */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold">Birthdays</h2>
                    <button className="text-gray-500 hover:text-gray-700">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </button>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                    <div>
                        <p className="text-sm"><span className="font-medium">Abram Workman</span> and <span className="font-medium">3 others</span></p>
                        <p className="text-sm text-gray-500">August 4</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoPanel;