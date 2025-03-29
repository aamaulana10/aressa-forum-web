import { React, useEffect, useState, } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncGetAllThreads } from '../../states/threads/action';
import ThreadList from '../../components/ThreadList';
import CategoryFilter from '../../components/CategoryFilter';


function ThreadPage() {
    const {
        threads = [],
    } = useSelector((states) => states);

    const dispatch = useDispatch();
    const [selectedCategories, setSelectedCategories] = useState([]);

    useEffect(() => {
        dispatch(asyncGetAllThreads());

    }, [dispatch]);

    return (
        <div className="w-full flex bg-gray-50 h-[calc(100vh-96px)]">
            <div className="flex-1 overflow-y-auto px-4">
                <CategoryFilter threads={threads} onCategorySelect={setSelectedCategories} />
                <ThreadList threads={selectedCategories.length > 0 ? threads.filter((thread) => selectedCategories.includes(thread.category)) : threads} />
            </div>

        </div >


    );
}

export default ThreadPage;