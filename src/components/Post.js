import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { objectToArray, formatDate } from '../utils/utils'
import { handleGetPostById } from '../actions/post'
import { Link } from 'react-router-dom'
class Post extends PureComponent {

    componentDidMount() {
        let { element, getPost } = this.props        
        getPost(element)
    }

    render() {
        const { post }  = this.props.post   
        return (
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
            </Link>
        )
    }
}

function mapStateToProps({ post }, props) {  
    const { element } = props
    return {
        post: post,
        element
    }
}

const mapDispatchToProps = dispatch => ({
    getPost(id) {
        dispatch(handleGetPostById( id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)
