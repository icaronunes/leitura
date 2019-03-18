import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { getAllItens } from './actions/combine'
import './App.css';
import Nav from './components/Nav'
import List from './components/List'
import Post from './components/Post'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(getAllItens())
  }

  render() {

    return (
      <Router>
        <Fragment>
          <div >
            <Nav categorias={this.props.categorias} />
            {this.props.categorias.categories
              && this.props.categorias.categories.map((element) => {
                return <Route path={`/${element.path}`} exact render={() => <List cat={element.name}/>} />
              })}
              {this.props.categorias.categories && 
              <Route path='/' exact render={() => <List cat={""}/>} />}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ categorias}) {
  return {
    categorias
  }
}

export default connect(mapStateToProps)(App)
