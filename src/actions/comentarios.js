import {  disable, edit } from '../reactnd-project-readable-starter/api-server/comments'
import { RECEIVE_COMMENTS, UPDATE } from '../reducers/comentarios'
import { getComentarioByPost } from '../utils/api'

function receiveComenario(comentario) {
    return {
        type: RECEIVE_COMMENTS,
        comments: { comentario }
    }
}

function updateCometario(comentarios) {
    return {
        type: UPDATE,
        comments: comentarios
    }
}

export function handleByParent(idParent) {
    return (dispatch) => {
        getComentarioByPost(idParent)
            .then(comentario => {                
                dispatch(receiveComenario(comentario))
            })
            .catch(e => {
                console.log("Erro em handleByParent", e)
            })
    }
}

export function handleDeleteItem(id) {
    return (dispatch) => {
        disable(id)
            .then((item) => {
                dispatch(receiveComenario(item))
            })
            .catch(e => { console.log("Erro - handleDeleteItem", e) })
    }
}

export function handleEditComentario(id, body) {
    return (dispatch) => {
        edit(id, body)
            .then(comentarios => {
                dispatch(updateCometario(comentarios))

            })
    }
}