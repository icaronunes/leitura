import { combineReducers } from 'redux'
import categorias from './categorias'
import comentario from './comentarios'
import post from './post'


export default combineReducers({
    categorias,
    post,
    comentario
})