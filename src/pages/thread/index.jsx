import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncCreateThread, asyncGetAllThreads } from '../../states/threads/action';
import ThreadList from '../../components/ThreadList';
import ThreadInput from '../../components/ThreadInput';
import CategoryFilter from '../../components/CategoryFilter';


function ThreadPage() {
    const {
        threads = [],
    } = useSelector((states) => states)

    const dispatch = useDispatch();
    const [selectedCategories, setSelectedCategories] = useState([]);

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
                <CategoryFilter threads={threads} onCategorySelect={setSelectedCategories} />
                <ThreadList threads={selectedCategories.length > 0 ? threads.filter(thread => selectedCategories.includes(thread.category)) : threads} />
            </div>

        </div >


    );
}

export default ThreadPage;