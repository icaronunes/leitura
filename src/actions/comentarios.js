
import { RECEIVE_COMMENTS, UPDATE, NEW } from '../reducers/comentarios'
import { getComentarioByPost, deleteCommentById, editCommentById, voteComment, saveComment } from '../utils/api';

function receiveComenario(comentario) {
    return {
        type: RECEIVE_COMMENTS,
        comments: comentario
    }
}

function receiveDetele(comentario) {
    return {
        type: UPDATE,
        comments: comentario
    }
}

function receiveNew(comentario) {
    return {
        type: NEW,
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
        console.log('handleDeleteItem', id)
        deleteCommentById(id)
            .then((item) => {
                console.log('handleDeleteItem', item)
                dispatch(receiveDetele(item))
            })
            .catch(e => { console.log("Erro - handleDeleteItem", e) })
    }
}

export function handleEditComentario(id, body) {
    return (dispatch) => {
        editCommentById(id, body)
            .then(comentarios => {
                //TODO atualizar redux                 
            })
    }
}

export function setVoteComments(id, vote) {
    return (dispatch) => {
        voteComment(id, vote)
            .then((coment) => {
                dispatch(updateCometario(coment))
            })
            .catch(e => {
                console.log("ERRO - setVoteComments", e)
            })
    }
}


export function setSaveComments(vote) {
    return (dispatch) => {
        saveComment(vote)
            .then((coment) => {
                console.log("setSaveComments", coment)
                dispatch(receiveNew(coment))
            })
            .catch(e => {
                console.log("ERRO - setVoteComments", e)
            })
    }
}