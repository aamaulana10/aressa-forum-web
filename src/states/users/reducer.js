const usersReducer = (users = [], action = {}) => {
    switch (action.type) {
        case 'GET_ALL_USERS':
            return action.payload.users;
        default:
            return users;
    }
}

export default usersReducer;