import { getByParent, disable, edit } from '../reactnd-project-readable-starter/api-server/comments'
import {  RECEIVE_COMMENTS, UPDATE } from '../reducers/comentarios'

export function handleByParent(idParent) {
    return (dispatch) => {    
        getByParent('token', idParent)
            .then(comentario => {
                dispatch(receiveComenario(comentario))
            })
            .catch(e => {
                console.log("Erro em handleByParent", e)
            })
    }
}

function receiveComenario(comentario) {
    return {
        type: RECEIVE_COMMENTS,
        comments: comentario
    }
}

function updateCometario(){
    return {
        type: UPDATE
    }
}


export function handleDeleteItem(id) {
    return (dispatch) => {
        disable('token', id)   
            .then((item) => {                
                dispatch(receiveComenario(item)) })
            .catch(e => { console.log("Erro - handleDeleteItem", e) })
    }
}

export function handleEditComentario(id, body){
    return (dispatch) => {
        edit('token', id, body)
        .then(item => {
            dispatch(updateCometario())
                        
        })
    }
}