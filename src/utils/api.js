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
        .then(res => console.log("retorno save", res));
}

module.exports = {
    getAllPost,
    getAllCategory,
    getComentarioByPost,
    getPostByCategory,
    getPostById,
    getSavePost
}