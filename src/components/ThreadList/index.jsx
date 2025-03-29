import React from 'react';
import ThreadItem from '../ThreadItem';
import PropTypes from 'prop-types';

ThreadList.propTypes = {
    threads: PropTypes.array,
};

function ThreadList({ threads }) {
    return (
        <div className="space-y-6 overflow-y-auto h-[calc(100vh-200px)] pb-8">
            {
                threads && threads.map((thread) => (
                    <ThreadItem key={thread.id} thread={thread} />
                ))
            }
        </div>
    );
}

export default ThreadList;