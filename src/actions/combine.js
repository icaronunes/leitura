import { receiveCategorias } from './categorias'
import { receivePost } from './post'
import { getAllPostECategorias } from '../utils/utilsApi'

const token = 'token'

export function getAllItens() {
    return (dispatch) => {
        return getAllPostECategorias(token)
            .then(({ categorias, post }) => {
                console.group()
                    console.log('categoria', categorias)
                    console.log('post', post)
                console.groupEnd()
                dispatch(receiveCategorias(categorias))
                dispatch(receivePost(post))
            })
            .catch(e => {
                console.log('ERRO - combine.js', e)
            })
    }
}