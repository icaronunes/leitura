import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { getAllItens } from './actions/combine'
import './App.css';
import Nav from './components/Nav'
import List from './components/List'
import PostDetails from './components/PostDetals'
import NewPost from './components/NewPost'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(getAllItens())
    // Chamar somente uma vez, depois pegar do state. Com F5 o state é refeito
  }

  render() {

    return (
      <Router>
        <Fragment >
          <div >
            <Nav categorias={this.props.categorias} />
            {this.props.categorias.categories
              && this.props.categorias.categories.map((element) => {
                return <Route key={element.path} path={`/${element.path}`}
                  exact render={() => <List categoria={element.name} />} />
              })}
            <Route path='/' exact render={() => <List categoria={"todos"} />} />

            <Route path='/edit/:id' exact component={NewPost} />
            <Route path='/post/:id' exact component={PostDetails} />
            <Route path='/add' exact render={() => <NewPost categorias={this.props.categorias} />} />

          </div>
          <Link
            className="open-add"
            to={{
              pathname: '/add'
            }}
          ><button />
          </Link>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ categorias }) {
  return {
    categorias
  }
}

export default connect(mapStateToProps)(App)
