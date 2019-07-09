
export const RECEIVE_POST = 'RECEIVE_POST'
export const REVEIVE_POST_CAGEGORY = 'REVEIVE_POST_CAGEGORY'
export const SORT_POST = 'SORT_POST'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const VOTE_POST = 'VOTE_POST'

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

        case VOTE_POST:
            return state.map(item => {
                if (item.id === action.post.id) {
                    return action.post
                }
                return item
            })

        case EDIT_POST:         
            return state.map(item => {
                console.log('action', action)
                if (item.id === action.post.id) {
                    return action.post
                }
                return item
            })

        default:
            return state
    }
}