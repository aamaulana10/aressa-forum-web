import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../service/api";

const actionType = {
    GET_ALL_USERS: 'GET_ALL_USERS',
}

function getAllUsersActionCreator(users) {
    return {
        type: actionType.GET_ALL_USERS,
        payload: {
            users,
        }
    }
}

function asyncGetAllUsers() {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const users = await api.getAllUsers();
            dispatch(getAllUsersActionCreator(users));
        } catch (error) {
            alert(error.message);
        } finally {
            dispatch(hideLoading());
        }
    }
}

export {
    actionType,
    getAllUsersActionCreator,
    asyncGetAllUsers,
}