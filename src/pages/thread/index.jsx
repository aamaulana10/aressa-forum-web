import { useState, useEffect } from 'react';
import SideBar from '../../components/SideBar';
import { useSelector, useDispatch } from 'react-redux';
import { asyncCreateThread, asyncGetAllThreads } from '../../states/threads/action';
import ThreadList from '../../components/ThreadList';
import ThreadInput from '../../components/ThreadInput';

function ThreadPage() {
    const {
        threads = [],
    } = useSelector((states) => states)
    const [isOpen, setIsOpen] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncGetAllThreads())

    }, [dispatch])

    const onCreateThread = (title, body, category) => {
        dispatch(asyncCreateThread({ title, body, category }));
      }; 

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

                    <ThreadInput createThread={onCreateThread} />
                    <ThreadList threads={threads} />
                </div>
            </div>

        </div >


    );
}

export default ThreadPage;