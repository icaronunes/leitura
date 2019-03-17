import { combineReducers } from 'redux'
import categorias from './categorias'
import post from './post'


export default combineReducers({
    categorias,
    post
})