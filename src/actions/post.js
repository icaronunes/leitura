import { getByCategory, getAll, get } from '../reactnd-project-readable-starter/api-server/posts'
import { objectToArray} from '../utils/utils'
export const RECEIVE_POST = 'RECEIVE_POST'
export const REVEIVE_POST_CAGEGORY = 'REVEIVE_POST_CAGEGORY'
export const SORT_POST = 'SORT_POST'

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

function sortVotePost(postSort) {
    return {
        type: SORT_POST,
        post: postSort
    }
}

export function handleGetPost() {
    return (dispatch) => {
        getAll("token")
            .then(post => {        
                dispatch(receivePost(post))
            }).catch(e => {
                console.log("ERRO - handleCategoriaById", e)
            })
    }

}

export function handleGetPostById(id){
    return (dispatch) => {      
        get('token', id)
        .then((post) => {           
            dispatch(receivePost(post))
        })
        .catch(e => {
            console.log("ERRO - handleGetPostById", e)
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

export function handSortVotePost() {
    return (dispatch, getState) => {
        const { post } = getState()
        let lista = objectToArray(post) 
        const postSort = lista.sort((a, b) => {             
            return b.voteScore - a.voteScore})  
        dispatch(sortVotePost(postSort))
    }
}

export function handSortDate() {
    return (dispatch, getState) => {
        const { post } = getState()
        let lista = objectToArray(post)       
        const postSort = lista.sort((a, b) => b.timestamp - a.timestamp)
        dispatch(sortVotePost(postSort))
    }
}

