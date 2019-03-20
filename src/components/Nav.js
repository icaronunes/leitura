import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { handSortVotePost, handSortDate } from '../actions/post'

class Nav extends Component {

  state = {
    icon: false
  }

  handleSort() {
    const { dispatch } = this.props
    if(this.state.icon){
    dispatch(handSortVotePost())   
    } else {
    dispatch(handSortDate())
    }
    this.setState((prev, p) => ({
      icon: !prev.icon
    }))
  }

  render() {
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
          {this.props.categorias.categories
            &&
            this.props.categorias.categories.map((categorias) => (
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
        <button onClick={(e) => this.handleSort()}>botao</button>
      </nav>
    )
  }
}

export default connect()(Nav)