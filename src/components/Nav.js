import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav(props) {
  return (
    <nav >
      <ul style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100',
        alignItems: 'justify',
        alignContent: 'center',
        padding: '10px',
        margin: 'auto'
      }}>
        <li key={'home'} style={{
          listStyleType: 'none',
          marginLeft: '10px'
        }}>
          <NavLink to={`/`} exact activeClassName='active'>
            Todos
              </NavLink>
        </li>
        {props.categorias.categories
          &&
          props.categorias.categories.map((categorias) => (
            <li style={{
              listStyleType: 'none',
              marginLeft: '10px',
              gridRow: 'auto'
            }} key={categorias.name}>
              <NavLink to={`/${categorias.name}`} exact activeClassName='active'>
                {categorias.name}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  )
} 