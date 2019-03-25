import { getByParent } from '../reactnd-project-readable-starter/api-server/comments'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

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