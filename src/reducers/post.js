import { RECEIVE_POST, REVEIVE_POST_CAGEGORY, SORT_POST, ADD_POST, EDIT_POST } from '../actions/post'

export default function post(state = {}, action) {

    switch (action.type) {
        case RECEIVE_POST:
            return action.post

        case REVEIVE_POST_CAGEGORY:
            return action.post

        case SORT_POST:
            return action.post

        case ADD_POST:
            return action.post

        case EDIT_POST:
            return action.post

        default:
            return state
    }
}