import { getAll as getAllCategorias } from '../reactnd-project-readable-starter/api-server/categories'
import { getAll as getAllPost } from '../reactnd-project-readable-starter/api-server/posts'

export function getAllPostECategorias(token) {
    return Promise.all([
        getAllCategorias(token),
        getAllPost(token)
    ]).then(([categorias, post]) => ({
        categorias, post
    }))
    .catch(e => {
        console.log('erro', e)
    })

}

export function objectToArray(obj){
    if(obj === undefined) return []
    let keys = Object.keys(obj)
    let lista = keys.map(key => {
        return obj[key]
    })
    return lista
}

export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
  }
