import { hideLoading } from "react-redux-loading-bar";
import api from "../../service/api";
import { showLoading } from "react-redux-loading-bar";

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
        dispatch(showLoading());
        try {
            const threads = await api.createThread({
                title: title,
                body: body,
                category: category,
            });
            dispatch(getAllThreadActionCreator(threads));
        } catch (error) {
            alert(error.message);
        } finally {
            dispatch(hideLoading());
        }
    }
}

function asyncGetAllThreads() {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const threads = await api.getAllThreads();
            dispatch(getAllThreadActionCreator(threads));
        } catch (error) {
            alert(error.message);
        } finally {
            dispatch(hideLoading());
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