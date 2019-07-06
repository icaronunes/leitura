let token = 'token'

function getAllPost() {
    return fetch('http://localhost:3001/posts',
        {
            method: 'GET',
            headers: { 'Authorization': token }
        })
        .then(item => {
            return item.json()
        })
}

function getAllCategory() {
    return fetch('http://localhost:3001/categories',
        {
            method: 'GET',
            headers: { 'Authorization': token }
        })
        .then(item => {
            return item.json()
        })
}

function getComentarioByPost(id) {
    return fetch(`http://localhost:3001/posts/${id}/comments`,
        {
            method: 'GET',
            headers: { 'Authorization': token }
        })
        .then(res => {
            return res.json()
        })

}


function getPostByCategory(categoria) {
    return fetch(`http://localhost:3001/${categoria}/posts`,
        {
            method: 'GET',
            headers: { 'Authorization': token }
        })
        .then(res => {
            return res.json()
        })
        .catch(e => {
            console.log('getPostByCategory', e)
        })
}

function getPostById(id) {
    return fetch(`http://localhost:3001/posts/${id}`,
        {
            method: 'GET',
            headers: { 'Authorization': token }
        })
        .then(res => {            
            return res.json()
        })
}

function getSavePost(post) {
    return fetch(`http://localhost:3001/posts/`,
        {
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
}

function editPostById(id, post) {
    console.log('editPostById', JSON.stringify(post))
    return fetch(`http://localhost:3001/posts/${id}`,
        {
            method: 'PUT',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(post)
        }).then(res => {            
            return res.json();
        })
        .catch(e => {
            console.log('editPostById RES', e)
        })
}

function deletePostById(id) {
    return fetch(`http://localhost:3001/posts/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        }).then(res => {        
            return res.json();
        })
}

function deleteCommentById(id) {
    return fetch(`http://localhost:3001/comments/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        }       
    }).then(res => {
        return res.json();
    })
}

function editCommentById(id, comments) {
    return fetch(`http://localhost:3001/comments/${id}`, {
        method: 'PUT',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(comments)
    }).then(res => {
        return res.json();
    })
}

function saveComment(comments) {
    return fetch(`http://localhost:3001/comments/`, {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(comments)
    }).then(res => {
        return res.json();
    })
}

function getVotePost(id, vote) {
    return fetch(`http://localhost:3001/posts/${id}`,
        {
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vote)
        })
        .then(res => {
            console.log(res)
            return res.json()
        })
        .catch(e => {
            console.log('erro', e)
        })
}

function voteComment(id, vote) {
    return fetch(`http://localhost:3001/comments/${id}`,
        {
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vote)
        })
        .then(res => {
            console.log(res)
            return res.json()
        })
        .catch(e => {
            console.log('erro', e)
        })
}


module.exports = {
    getAllPost,
    getAllCategory,
    getComentarioByPost,
    getPostByCategory,
    getPostById,
    getSavePost,
    editPostById,
    deletePostById,
    editCommentById,
    getVotePost,
    voteComment,
    saveComment,
    deleteCommentById
}