import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleByParent } from '../actions/comentarios'
import { handleGetPostById } from '../actions/post'
import { objectToArray } from '../utils/utils'
import Post from './Post'

class PostDetals extends Component {

    componentDidMount() {
        const { getComments } = this.props
        const { id } = this.props.match.params
        getComments(id)
    }

    render() {       
        let { comentarios, post } = this.props
        return (
            <div>
                <Post item={post} />
                {comentarios && comentarios.map((comentario) => {
                    return <div key={comentario.id}>{comentario.body}</div>
                })}
            </div>
        )
    }
}


function mapStateToProps({ post, comentario }, item) {

    let id = item.match.params.id
    let posts = objectToArray(post).filter(item => {
        return id === item.id
    })[0]

    return {
        post: posts,
        comentarios: objectToArray(comentario)
    }
}

const mapDispatchToProps = dispatch => ({
    getComments(id) {
        dispatch(handleByParent(id));
    },
    getPost(id) {
        dispatch(handleGetPostById(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetals)