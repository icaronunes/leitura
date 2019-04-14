import { getAll as getAllCategorias } from '../reactnd-project-readable-starter/api-server/categories'
import { getAll as getAllPost } from '../reactnd-project-readable-starter/api-server/posts'

export function getAllPostECategorias(token) {
    return Promise.all([
        getAllCategorias(token),
        getAllPost(token)
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

export function formatDate(timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}


export function UpcasePrimeiraLetra(title){
    let primeira = title[0].toUpperCase()
    let final = title.substr(1, title.size)
    return primeira + final;
  }


export function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }
