import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleByParent } from '../actions/comentarios'
import { handleGetPostById } from '../actions/post'
import { objectToArray } from '../utils/utils'
import Post from './Post'

class PostDetals extends Component {

    componentDidMount() {
        let id = this.props.match.params.id
        this.props.getPost(id)
        this.props.getComments(id)
    }

    render() {

        let post = this.props.post
        let comentarios = objectToArray(this.props.comentarios)
        console.log('PostDetals', post)
        return (
            <div>
                {post && post.id}
                {comentarios && comentarios.map((comentario) => {
                    return <div key={comentario.id}>{comentario.body}</div>
                })}
                <div>{}</div>
            </div>
        )
    }
}


function mapStateToProps({ post, comentario }, props) {
    console.log('mapStateToProps - props', props)
    console.log('mapStateToProps - post', post)
    console.log('mapStateToProps - comments', comentario)

    return {
        post,
        comentarios: comentario
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