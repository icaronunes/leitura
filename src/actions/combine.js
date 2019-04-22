import { receiveCategorias } from './categorias'
import { receivePost } from './post'
import { getAllPostECategorias } from '../utils/utils'

export function getAllItens() {
    return (dispatch) => {
        return getAllPostECategorias()
            .then((res) => {    
                console.log('combine.js', res)                   
                dispatch(receiveCategorias(res[0]))
                dispatch(receivePost(res[1]))
            })
            .catch(e => {
                console.log('ERRO - getAllItens', e)
            })
    }
}