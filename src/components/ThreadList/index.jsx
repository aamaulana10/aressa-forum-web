import ThreadItem from "../ThreadItem";

function ThreadList({ threads }) {
    console.log('threads ', threads);

    return (
        <div className="space-y-6">
            {
                threads && threads.map((thread) => (
                    <ThreadItem key={thread.id} thread={thread} />
                ))
            }
        </div>
    );
}

export default ThreadList;