import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { handSortVotePost, handSortDate } from '../actions/post'
import {UpcasePrimeiraLetra } from '../utils/utils'
import sort from '../sort.png'

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
          height: '45px',
          alignItems: 'justify',
          alignContent: 'center',
          padding: '10px',
          justifyContent: "center",
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
                  {UpcasePrimeiraLetra(categorias.name)}
                </NavLink>
              </li>
            ))}
            <img style={{
              listStyleType: 'none',
              marginLeft: '10px',
              gridRow: 'auto',
              width: "40px",
              height: "40px"
              
            }} src={sort}  onClick={(e) => this.handleSort()} />
        </ul>
      </nav>
    )
  }
}

export default connect()(Nav)