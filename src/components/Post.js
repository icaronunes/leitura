import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { objectToArray, formatDate } from '../utils/utils'
import { handleGetPostById } from '../actions/post'
import { Link } from 'react-router-dom'
class Post extends PureComponent {

    render() {
        const post = this.props.item
        console.log('Post', post)
        return (post ?
            <Link style={{
            }} to={{
                pathname: `/post/${post.id}`,
                state: { post: post }
            }}>
                <h3 style={{ margin: '0', fontSize: '14px' }}> {post.title}</h3>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    textJustify: 'auto',
                    margin: '0'
                }}>
                    <h5 style={{ margin: '0', fontSize: '12px' }}>{post.author}</h5>
                    <h6 style={{ margin: '0', marginLeft: '10px', fontSize: '8px' }}>{formatDate(post.timestamp)}</h6>
                </span>
                <h6 style={{fontSize: '10px', marginTop: '10px', marginLeft: '10px' }}>{post.body}</h6>
                <span style={{
                    display: 'flex',
                    alignItems: 'right',    
                    textAlign: 'right', 
                    margin: '0'
                }}>
                    <h6>{post.category}</h6>
                    <h6>{post.voteScore}</h6>
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
