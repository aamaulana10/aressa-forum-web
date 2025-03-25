import ThreadItem from "../ThreadItem";

function ThreadList({ threads }) {
    console.log('threads ', threads);

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