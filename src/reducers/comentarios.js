
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const UPDATE = 'UPDATE'

export default function comentarios(state = {}, action) {
    switch (action.type) {

        case RECEIVE_COMMENTS:
            return {
                ...state,                
                ...action.comments
            }

        case UPDATE:
            return {
                ...action.comments
            }

        default:
            return state
    }

}