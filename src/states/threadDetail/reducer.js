import { ActionType } from './action';

function threadDetailReducer(threadDetail = null, action = {}) {
    switch (action.type) {
        case ActionType.GET_THREAD_DETAIL:
            return action.payload.threadDetail;
        default:
            return threadDetail;
    }
}

export default threadDetailReducer;