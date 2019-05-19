import { getPostByCategory, getAllPost, getPostById, getSavePost, editPostById } from '../utils/api'

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
    return (dispatch) => {
        getSavePost(post)
            .then((post) => {
                dispatch(addPost(post))
            })
            .catch(erro => {
                console.log("erro - handleAddPOst", erro)
            })
    }
}

export function handleGetPost() {
    return (dispatch) => {
        getAllPost()
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
        console.log('handSortVotePost', post)
        const postSort = post.sort((a, b) => {
            return b.voteScore - a.voteScore
        })
        console.log('handSortVotePost', postSort)
        dispatch(sortVotePost(postSort))
    }
}

export function handSortDate() {
    return (dispatch, getState) => {
        const { post } = getState()
        console.log('handSortDate', post)
        let posts = post.sort((a, b) =>
            b.timestamp - a.timestamp
        )
        console.log('handSortDate', posts)
        dispatch(sortVotePost(posts))
    }
}

export function handleEdit(id, post) {
    return (dispatch) => {
        editPostById(id, post)
            .then((post) => {
                dispatch(editPost(post))
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
                dispatch(receivePost(e))
            })
            .catch(e => {
                console.log("ERRO - handleEdit", e)
            })
    }
}

