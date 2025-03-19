import api from "../../service/api";

const actionType = {
    GET_ALL_THREADS: 'GET_ALL_THREADS',
    CREATE_THREAD: 'CREATE_THREAD',
}

function getAllThreadActionCreator(threads) {
    return {
        type: actionType.GET_ALL_THREADS,
        payload: {
            threads,
        }
    }
}

function createThreadActionCreator(thread) {
    return {
        type: actionType.CREATE_THREAD,
        payload: {
            thread,
        }
    }
}

function asyncCreateThread({ title, body, category }) {
    return async (dispatch) => {
        try {
            const threads = await api.createThread({
                title: title,
                body: body,
                category: category,
            });
            dispatch(getAllThreadActionCreator(threads));
        } catch (error) {
            alert(error.message);
        }
    }
}

function asyncGetAllThreads() {
    return async (dispatch) => {
        try {
            const threads = await api.getAllThreads();
            dispatch(getAllThreadActionCreator(threads));
        } catch (error) {
            alert(error.message);
        }
    }
}

export {
    actionType,
    getAllThreadActionCreator,
    createThreadActionCreator,
    asyncCreateThread,
    asyncGetAllThreads,
}