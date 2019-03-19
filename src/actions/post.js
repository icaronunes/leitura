import { getByCategory, getAll } from '../reactnd-project-readable-starter/api-server/posts'

export const RECEIVE_POST = 'RECEIVE_POST'
export const REVEIVE_POST_CAGEGORY = 'REVEIVE_POST_CAGEGORY'


export function handlegetPost() {
    return (dispatch) => {
        getAll("token")
        .then(post =>{
            dispatch(receivePost(post))
        }).catch(e => {
            console.log("ERRO - handleCategoriaById", e)
        })
    }
    
}

export function handleCategoriaById(token, categoria) {
    return (dispatch) => {
        getByCategory(token, categoria)
        .then(post => {                                   
            dispatch(getCategoriaById(post))
        })
        .catch(e => {
            console.log("ERRO - handleCategoriaById", e)
        })
    }
}

export function receivePost(post) {
   return {
       type: RECEIVE_POST,
       post
   }
}

function getCategoriaById(post) {
    return {
        type: REVEIVE_POST_CAGEGORY,
        post
    }
}

