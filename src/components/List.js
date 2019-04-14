import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import { handleCategoriaById, handleGetPost } from '../actions/post'
import { objectToArray } from '../utils/utils'

class List extends Component {

    render() {
        const { posts } = this.props   
        return (
            <div>
                <ul>
                    {posts && posts.map((element) => (
                        <li key={element.id} style={{
                            listStyleType: 'none',
                            justifyContent: "center",
                        }} >
                            <Post item={element} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ post }, categoria) {  
    if (categoria.categoria !== 'todos') {
        return {
            posts: objectToArray(post).filter((item) =>
                item.category === categoria.categoria)
        }
    } else {
        return { posts: objectToArray(post) }
    }
}

const mapDispatchToProps = (dispatch) => ({
    categoriaById(token, categoria) {
        dispatch(handleCategoriaById(token, categoria));
    },
    getPost() {
        dispatch(handleGetPost())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(List)