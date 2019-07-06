/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { handSortVotePost, handSortDate } from '../actions/post'
import { UpcasePrimeiraLetra } from '../utils/utils'
import sort from '../sort.png'

class Nav extends Component {

  state = {
    icon: false
  }

  handleSort() {
    const { dispatch } = this.props
    if (this.state.icon) {
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
          backgroundColor: 'yellow',
          listStyleType: 'none',
          textAlign: 'center',
          padding: '0',
          margin: '0'
        }}>
          <li key={'home'} style={{
            display: 'inline-block',
            fontSize: '20px',
            padding: '20px'
          }}><NavLink to={`/`} exact  activeClassName="active">
              Todos
            </NavLink>
          </li>
          {this.props.categorias.categories
            &&
            this.props.categorias.categories.map((categorias) => (
              <li style={{
                display: 'inline-block',
                fontSize: '20px',
                padding: '20px'
              }} key={categorias.name}>           
                <NavLink to={`/${categorias.name}`} exact  activeClassName="active">
                  {UpcasePrimeiraLetra(categorias.name)}
                </NavLink>
              </li>
            ))}

          {!this.props.location.pathname.includes('/post') &&
            <img style={{
              alignSelf: 'center',
              width: "26px",
              height: "26px"
            }} src={sort} onClick={() => this.handleSort()} />
          }
        </ul>
      </nav>
    )
  }
}

export default withRouter(connect()(Nav))
