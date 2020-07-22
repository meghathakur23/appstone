import { ADD_USERS, DELETE_USER, UPDATE_USER } from './actions';

const initialState = {
    user_list: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_USERS:
            return {
                user_list: action.payload
            }
        case UPDATE_USER:
            return {
                user_list: state.user_list.map(item => item.id === action.payload.id ? action.payload : item)
            }
        case DELETE_USER:
            return {
                user_list: state.user_list.map(item => item.id === action.payload.id ? Object.assign({}, item, {_deleted : true}) : item)
            }
        default:
            return state;
    }
}

export default reducer;