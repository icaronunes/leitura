import { getAllPost, getAllCategory } from './api'

export function getAllPostECategorias() {
    return Promise.all([
        getAllCategory(),
        getAllPost()
    ]).then((post) => {
        return (post)
    })
        .catch(e => {
            console.log('erro', e)
        })
}

export function objectToArray(obj) {
    if (obj === undefined) return []
    let keys = Object.keys(obj)
    let lista = keys.map(key => {
        return obj[key]
    })
    return lista
}

export function arrayToObject(post) {
    let postArray = {}
    if (Array.isArray(post)) {
       post.forEach((item, i) => {
        postArray[item.id] = item
        })
    }
    return postArray
}

export function formatDate(timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}


export function UpcasePrimeiraLetra(title) {
    let primeira = title[0].toUpperCase()
    let final = title.substr(1, title.size)
    return primeira + final;
}


export function generateUID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
