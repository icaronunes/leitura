import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { objectToArray, formatDate } from '../utils/utils'
import { handleGetPostById } from '../actions/post'
import { Link } from 'react-router-dom'
import { get } from 'http';
class Post extends PureComponent {

    render() {
        const  post  = this.props.item
        console.log('Post', post)
        return (post ?
            <Link style={{
                border: '1px',
                borderColor: 'red',
            }} to={{
                pathname: `/post/${post.id}`,
                search: "?sort=name",
                hash: "#the-hash",
                state: { post: post }
            }}>
                <h3>{post.title}</h3>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    textJustify: 'auto'
                }}><h5>{post.author}</h5>
                    <h6>{formatDate(post.timestamp)}</h6>
                </span>
                <h6>{post.body}</h6>
                <span style={{
                    display: 'flex',
                    textAlign: 'right'
                }} >
                    <h6>{post.category}</h6>
                    <h6 style={{
                        textAlign: 'right',
                        alignContent: 'right',
                        alignSelf: 'right',
                        position: 'relative'
                    }}>{post.voteScore}</h6>
                </span>
            </Link> : null
        )
    }
}

function mapStateToProps({ post }, props) {
    console.log('mapStateToProps - Post', props)
    const { id } = props
    return {
        post: objectToArray(post),
        id: id.id
    }
}

const mapDispatchToProps = dispatch => ({

    getPost(id) {
        dispatch(handleGetPostById(id))
    }
})

export default connect()(Post)
