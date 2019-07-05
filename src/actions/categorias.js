import { getAllCategory } from '../utils/api'

export const RECEIVE_CATEGORIAS = 'RECEIVE_CATEGORIAS'

export function receiveCategorias(categorias){
    return {
        type: RECEIVE_CATEGORIAS,
        categorias
    }
}


export function handleCategorys() {
    return (dispatch) => {
        getAllCategory()
            .then(categorys => {                
                dispatch(receiveCategorias(categorys))
            })
            .catch(e => {
                console.log("Erro em handleByParent", e)
            })
    }
}