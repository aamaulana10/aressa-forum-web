import { useState, useEffect } from 'react';
import SideBar from '../../components/SideBar';
import { useSelector, useDispatch } from 'react-redux';
import { asyncGetAllThreads } from '../../states/threads/action';
import ThreadList from '../../components/ThreadList';
import ThreadInput from '../../components/ThreadInput';

const upcomingEvents = [
    { id: 1, title: 'Apple Keynote', date: 'Fri, Aug 3 at 3:30 PM' },
    { id: 2, title: '30 Second to Mars', date: 'Sat, Aug 4 at 11:00 AM' },
    { id: 3, title: 'Avatar Premiere', date: 'Sun, Aug 5 at 1:30 PM' },
    { id: 4, title: 'UX Design Course', date: 'Mon, Aug 6 at 4:00 PM' },
    { id: 5, title: 'UI Design Course', date: 'Tue, Aug 7 at 1:00 PM' },
];

const groups = [
    { id: 1, name: 'Nike', subscribers: '812K Subscribers', avatar: '🎯' },
    { id: 2, name: 'Netflix', subscribers: '5.2M Subscribers', avatar: '🎬' },
];

const contacts = [
    { id: 1, name: 'Desirae Schleifer', online: true },
    { id: 2, name: 'Jocelyn Dias', online: true },
    { id: 3, name: 'Marilyn Franci', online: false },
    { id: 4, name: 'Nolan Dorwart', online: true },
    { id: 5, name: 'Kianna George', online: false },
    { id: 6, name: 'Helena Thornot', online: true },
    { id: 7, name: 'Carla Westervelt', online: false },
    { id: 8, name: 'Jaydon Torff', online: true },
    { id: 9, name: 'Mira Curtis', online: false },
    { id: 10, name: 'Chance Septimus', online: true },
    { id: 11, name: 'Ashlynn Aminoff', online: false },
];

function ThreadPage() {
    const {
        threads = [],
    } = useSelector((states) => states)
    const [isOpen, setIsOpen] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncGetAllThreads())

    }, [dispatch])

    return (
        <div className="min-h-screen w-full flex bg-gray-50">

            <SideBar isOpen={isOpen} />

            <div className="flex-1 p-8">
                <div className="mx-auto">
                    {/* Toggle Sidebar Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="mb-4 p-2 rounded-lg hover:bg-gray-100">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <ThreadInput />
                    <ThreadList threads={threads} />
                </div>
            </div>

        </div >


    );
}

export default ThreadPage;