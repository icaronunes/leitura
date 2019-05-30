import { receiveCategorias } from './categorias'
import { receivePost } from './post'
import { getAllPostECategorias } from '../utils/utils'

export function getAllItens() {
    return (dispatch) => {
        return getAllPostECategorias()
            .then((res) => {                       
                dispatch(receivePost(res[1]))
                dispatch(receiveCategorias(res[0]))
            })                    
            .catch(e => {
                console.log('ERRO - getAllItens', e)
            })
    }
}