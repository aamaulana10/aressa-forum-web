import { actionType } from './action';

function threadsReducer(threads = [], action = {}) {
    switch (action.type) {
        case actionType.GET_ALL_THREADS:
            return action.payload.threads;
        case actionType.CREATE_THREAD:
            return [action.payload.thread, ...threads];
        default:
            return threads;
    }
}

export default threadsReducer;