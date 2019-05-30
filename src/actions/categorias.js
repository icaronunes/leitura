export const RECEIVE_CATEGORIAS = 'RECEIVE_CATEGORIAS'

export function receiveCategorias(categorias){
    return {
        type: RECEIVE_CATEGORIAS,
        categorias
    }
}