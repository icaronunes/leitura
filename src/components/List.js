import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'

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
    let posts = post.post ? post.post : []
    if (categoria.categoria !== 'todos') {
        return {
            posts: posts.filter((item) =>
                item.category === categoria.categoria)
        }
    } else {
        return { posts: posts }
    }
}
export default connect(mapStateToProps)(List)
