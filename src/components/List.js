import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import { handleCategoriaById, handlegetPost } from '../actions/post'
import { objectToArray } from '../utils/utils'

class List extends Component {

    componentDidMount() {
        const { categoria, dispatch } = this.props      
        if (categoria !== 'todos') {
            dispatch(handleCategoriaById("", categoria))
        } else {
            dispatch(handlegetPost())
        }
    }

    render() {
        const { posts } = this.props     
        return (
            <div>
                <ul>
                    {posts && posts.map((element) => (
                        <li style={{
                            listStyleType: 'none'
                        }} key={element.id}>
                            <Post id={element.id} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ post }, categoria) { 
    console.log("mapStateToProps", post, categoria) 
    return {
        categoria: categoria.categoria,
        posts: objectToArray(post)
    }
}

export default connect(mapStateToProps)(List)