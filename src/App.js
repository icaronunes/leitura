import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { getAllItens } from './actions/combine'
import './App.css';
import Nav from './components/Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(getAllItens())
  }

  render() {
    console.log('categorias', this)

    return (
      <Router>
        <Fragment>
          <div >
            <Nav categorias={this.props.categorias} />
            {this.props.categorias.categories
              && this.props.categorias.categories.forEach((element) => {  
               return <Route path={`/${element.name}`} exact component={null} />              
            })}
            <Route path='/' exact component={<React/>} />            
            </div>
        </Fragment>
      </Router>
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
