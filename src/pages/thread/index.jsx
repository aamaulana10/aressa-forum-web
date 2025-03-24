import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncCreateThread, asyncGetAllThreads } from '../../states/threads/action';
import ThreadList from '../../components/ThreadList';
import ThreadInput from '../../components/ThreadInput';


function ThreadPage() {
    const {
        threads = [],
    } = useSelector((states) => states)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncGetAllThreads())

    }, [dispatch])

    const onCreateThread = (title, body, category) => {
        dispatch(asyncCreateThread({ title, body, category }));
    };

    return (
        <div className="min-h-screen w-full flex bg-gray-50">

            <div className="flex-1">
                <ThreadInput createThread={onCreateThread} />
                <ThreadList threads={threads} />
            </div>

        </div >


    );
}

export default ThreadPage;