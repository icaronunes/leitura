import { receiveCategorias } from './categorias'
import { receivePost } from './post'
import { getAllPostECategorias } from '../utils/utils'
import { objectToArray } from '../utils/utils'

const token = 'token'

export function getAllItens() {
    return (dispatch) => {
        return getAllPostECategorias(token)
            .then((res) => {
                const post = objectToArray(res[1])
                console.group()
                    console.log('categoria', res[0])
                    console.log('post', res[1])
                console.groupEnd()
                //Transformando object em lista  
                dispatch(receiveCategorias(res[0]))
                dispatch(receivePost(post))
            })
            .catch(e => {
                console.log('ERRO - combine.js', e)
            })
    }
}