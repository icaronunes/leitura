import { RECEIVE_CATEGORIAS } from '../actions/categorias'

export default function categorias(state = {}, action) {
    switch (action.type) {
        case RECEIVE_CATEGORIAS:
            return {
                ...state,
                ...action.categorias
            }
        default:
            return state
    }
}