
export const RECEIVE_POST = 'RECEIVE_POST'
export const REVEIVE_POST_CAGEGORY = 'REVEIVE_POST_CAGEGORY'
export const SORT_POST = 'SORT_POST'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'

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