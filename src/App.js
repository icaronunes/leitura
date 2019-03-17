import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllItens } from './actions/combine'
import './App.css';
class App extends Component {

  componentDidMount() {
    this.props.dispatch(getAllItens())
  }

  render() {

    console.log('App', this)

    return (
      <div className="App">
        dada
      </div>
    );
  }
}

function mapStateToProps({ categorias, post }) {
  return {
    categorias,
    post
  }
}

export default connect(mapStateToProps)(App)
