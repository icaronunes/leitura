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