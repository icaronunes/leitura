
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const UPDATE = 'UPDATE'
export const DELETE = 'DELETE'

export default function comentarios(state = {}, action) {
    switch (action.type) {

        case RECEIVE_COMMENTS:
            return  action.comments
            
        case UPDATE:
            return {...state                
            }

        case DELETE:
            return [
                ...state,
                {...action.comments}
            ]

        default:
            return state
    }

}