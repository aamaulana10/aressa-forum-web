import api from '../../service/api';
import { setAuthUserActionCreator } from '../authUser/action';

const ActionType = {
    SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

function setIsPreloadActionCreator(isPreload) {
    return {
        type: ActionType.SET_IS_PRELOAD,
        payload: {
            isPreload,
        },
    };
}

function asyncPreloadProcess() {
    return async (dispatch) => {
        try {
            // preload process
            const currentPath = window.location.pathname;
            if (currentPath === '/register') {
                dispatch(setAuthUserActionCreator(null));
            } else {
                const authUser = await api.getOwnProfile();
                dispatch(setAuthUserActionCreator(authUser));
            }
        } catch (error) {
            // fallback process
            console.log(error.message);
            dispatch(setAuthUserActionCreator(null));
        } finally {
            // end preload process
            dispatch(setIsPreloadActionCreator(false));
        }
    };
}

export {
    ActionType,
    setIsPreloadActionCreator,
    asyncPreloadProcess,
};