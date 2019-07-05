import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { handleCategorys } from './actions/categorias'
import './App.css';
import Nav from './components/Nav'
import List from './components/List'
import PostDetails from './components/PostDetals'
import NewPost from './components/NewPost'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    this.props.getCategory()
  }

  render() {

    return (
      <Router>
        <Fragment >
          <div >
            <Nav categorias={this.props.categorias} />

            <Route path='/:category' exact component={List} />
            <Route path='/' exact component={List} />

            <Route path='/edit/:id' exact component={NewPost} />
            <Route path='/:category/:id' exact component={PostDetails} />
            <Route path='/add' exact render={() => <NewPost categorias={this.props.categorias} />} />
          // TODO arrumar 
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

const mapDispatchToProps = dispatch => ({
  getCategory() {
    dispatch(handleCategorys())
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(App)

// <Route path='/' exact render={() => <List categoria={"todos"} />} />
// {this.props.categorias.categories
//   && this.props.categorias.categories.map((element) => {
//     return <Route key={element.path} path={`/${element.path}`}
//       exact render={() => <List categoria={element.name} />} />
//   })}
