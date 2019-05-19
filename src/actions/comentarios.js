
import { RECEIVE_COMMENTS, UPDATE, DELETE } from '../reducers/comentarios'
import { getComentarioByPost, deletePostById, editCommentById } from '../utils/api'

function receiveComenario(comentario) {
    return {
        type: RECEIVE_COMMENTS,
        comments: comentario
    }
}

function receiveDetele(comentario) {
    return {
        type: DELETE,
        comments: comentario 
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
        deletePostById(id)
            .then((item) => {
                console.log(" handleDeleteItem", item)
                dispatch(receiveDetele(item))
            })
            .catch(e => { console.log("Erro - handleDeleteItem", e) })
    }
}

export function handleEditComentario(id, body) {
    return (dispatch) => {
        editCommentById(id, body)
            .then(comentarios => {
                              
            })
    }
}