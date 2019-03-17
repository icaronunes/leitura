import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav(props) {
  return (
    <nav className='nav'>
      <ul>
      <li key={'home'}>
      <NavLink to={`/`} exact activeClassName='active'>
                Todos
              </NavLink>
              </li>
        {props.categorias.categories
          &&
          props.categorias.categories.map((categorias) => (
            <li key={categorias.name}>
              <NavLink to={`/${categorias.name}`} exact activeClassName='active'>
                {categorias.name}
              </NavLink>
            </li>
          ))}          
      </ul>
    </nav>
  )
} 