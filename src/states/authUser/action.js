import api from '../../service/api';

const ActionType = {
    SET_AUTH_USER: 'SET_AUTH_USER',
    UNSET_AUTH_USER: 'UNSET_AUTH_USER',
    GET_AUTH_USER: 'GET_AUTH_USER',
};

function setAuthUserActionCreator(authUser) {
    return {
        type: ActionType.SET_AUTH_USER,
        payload: {
            authUser,
        },
    };
}

function unsetAuthUserActionCreator() {
    return {
        type: ActionType.UNSET_AUTH_USER,
        payload: {
            authUser: null,
        },
    };
}

function getAuthUserActionCreator(authUser) {
    return {
        type: ActionType.GET_AUTH_USER,
        payload: {
            authUser: authUser,
        },
    };
}

function asyncSetAuthUser({ email, password }) {
    return async (dispatch) => {
        try {
            const token = await api.login({ email, password });
            api.putAccessToken(token);
            const authUser = await api.getOwnProfile();
            dispatch(setAuthUserActionCreator(authUser));
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncUnsetAuthUser() {
    return (dispatch) => {
        dispatch(unsetAuthUserActionCreator());
        api.putAccessToken('');
    };
}

function asyncGetAuthUser() {
    return async (dispatch) => {
        try {
            const authUser = await api.getOwnProfile();
            dispatch(getAuthUserActionCreator(authUser));
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncRegisterUser({ name, email, password }) {
    return async () => {
        try {
            await api.register({ name, email, password });
        } catch (error) {
            alert(error.message);
        }
    };
}

export {
    ActionType,
    setAuthUserActionCreator,
    unsetAuthUserActionCreator,
    getAuthUserActionCreator,
    asyncGetAuthUser,
    asyncSetAuthUser,
    asyncUnsetAuthUser,
    asyncRegisterUser,
};