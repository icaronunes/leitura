import { receiveCategorias } from './categorias'
import { receivePost } from './post'
import { getAllPostECategorias } from '../utils/utils'
import { objectToArray } from '../utils/utils'

const token = 'token'

export function getAllItens() {
    return (dispatch) => {
        return getAllPostECategorias(token)
            .then(({ categorias, posts }) => {
                console.group()
                    console.log('categoria', categorias)
                    console.log('post', post)
                console.groupEnd()
                const post = objectToArray(posts)   //Transformando object em lista  
                dispatch(receiveCategorias(categorias))
                dispatch(receivePost(post))
            })
            .catch(e => {
                console.log('ERRO - combine.js', e)
            })
    }
}