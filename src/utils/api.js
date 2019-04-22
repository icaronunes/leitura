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

module.exports = {
    getAllPost,
    getAllCategory,
    getComentarioByPost
}