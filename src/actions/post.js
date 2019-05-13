import { getAll, add, edit, } from '../reactnd-project-readable-starter/api-server/posts'
import { getPostByCategory, getAllPost, getPostById, getSavePost } from '../utils/api'

export const RECEIVE_POST = 'RECEIVE_POST'
export const REVEIVE_POST_CAGEGORY = 'REVEIVE_POST_CAGEGORY'
export const SORT_POST = 'SORT_POST'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'

export function receivePost(post) {
    return {
        type: RECEIVE_POST,
        post: post
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

function addPost(post) {
    return {
        type: ADD_POST,
        post
    }
}

function editPost(post) {
    return {
        type: EDIT_POST,
        post: post
    }
}

export function handleAddPost(post) {
    console.log("handleAddPost", post)
    return (dispatch) => {
        getSavePost(post)
            .then((post) => {   
                console.log("handleAddPost", post)
                dispatch(addPost(post))
                //Retorna todas os posts 
            })
            .catch(erro => {
                console.log("erro - handleAddPOst", erro)
            })
    }
}

export function handleGetPost() {
    return (dispatch) => {
        getAll()
            .then((post) => {
                dispatch(receivePost(post))
            }).catch(e => {
                console.log("ERRO - handleGetPost", e)
            })
    }

}

export function handleGetPostById(id) {
    return (dispatch) => {
        getPostById(id)
            .then((post) => {
                console.log("getPostById", post)
                dispatch(receivePost(post))
            })
            .catch(e => {
                console.log("ERRO - handleGetPostById", e)
            })
    }
}

export function handleCategoriaById(categoria) {
    console.log("handleCategoriaById", categoria)
    return (dispatch) => {
        getByCategory(categoria)
            .then((post) => {
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
        const postSort = post.sort((a, b) => {
            return b.voteScore - a.voteScore
        })
        dispatch(sortVotePost(postSort))
    }
}

export function handSortDate() {
    return (dispatch, getState) => {
        const { post } = getState()
        const postSort = post.sort((a, b) => b.timestamp - a.timestamp)
        dispatch(sortVotePost(postSort))
    }
}

export function handleEdit(id, post) {
    return (dispatch) => {
        edit('token', id, post)
            .then((e) => {
                dispatch(editPost(e))
            })
            .catch(e => {
                console.log("ERRO - handleEdit", e)
            })
    }
}

export function getByCategory(categoria) {
    return (dispatch) => {
        getPostByCategory(categoria)
            .then((e) => {
                console.log("handleEdit", e)
                dispatch(receivePost(e))
            })
            .catch(e => {
                console.log("ERRO - handleEdit", e)
            })
    }
}

