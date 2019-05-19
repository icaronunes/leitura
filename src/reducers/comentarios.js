
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const UPDATE = 'UPDATE'
export const DELETE = 'DELETE'

export default function comentarios(state = {}, action) {
    switch (action.type) {

        case RECEIVE_COMMENTS:
            return action.comments

        case UPDATE:
            let alterado = state.map(item => {
                if (item.id === action.comments.id) {
                    item = action.comments
                }
                return item
            })
            return alterado

        case DELETE:
            let alterado2 = state.map(item => {
                if (item.id === action.comments.id) {
                    item = action.comments
                }
                return item
            })
            return alterado

        default:
            return state
    }

}