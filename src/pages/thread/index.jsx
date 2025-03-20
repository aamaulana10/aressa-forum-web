import { useState, useEffect } from 'react';
import SideBar from '../../components/SideBar';
import { useSelector, useDispatch } from 'react-redux';
import { asyncCreateThread, asyncGetAllThreads } from '../../states/threads/action';
import ThreadList from '../../components/ThreadList';
import ThreadInput from '../../components/ThreadInput';
import Header from '../../components/Header';
import { asyncUnsetAuthUser } from '../../states/authUser/action';

function ThreadPage() {
    const {
        threads = [],
        authUser = null,
    } = useSelector((states) => states)
    const [isOpen, setIsOpen] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncGetAllThreads())

    }, [dispatch])

    const onCreateThread = (title, body, category) => {
        dispatch(asyncCreateThread({ title, body, category }));
    };

    function onLogout() {
        console.log('logout');
        dispatch(asyncUnsetAuthUser());
    }

    return (
        <div className="min-h-screen w-full flex bg-gray-50">

            <SideBar isOpen={isOpen} />

            <div className="flex-1 p-8">

                <Header isOpen={isOpen} setIsOpen={setIsOpen} onLogout={onLogout} userName={authUser.name} />

                <ThreadInput createThread={onCreateThread} />
                <ThreadList threads={threads} />
                {/* </div> */}
            </div>

        </div >


    );
}

export default ThreadPage;