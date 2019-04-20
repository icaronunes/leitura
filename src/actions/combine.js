import { receiveCategorias } from './categorias'
import { receivePost } from './post'
import { getAllPostECategorias } from '../utils/utils'
import { objectToArray } from '../utils/utils'


export function getAllItens() {
    return (dispatch) => {
        return getAllPostECategorias()
            .then((res) => {                       
                dispatch(receiveCategorias(res[0]))
                dispatch(receivePost(res[1]))
            })
            .catch(e => {
                console.log('ERRO - combine.js', e)
            })
    }
}