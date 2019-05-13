import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleByParent } from '../actions/comentarios'
import PostInfo from './PostInfo'
import Comments from './Comments';
import { getByCategory, handleGetPostById } from '../actions/post'
import { isNull } from 'util';

class PostDetals extends Component {

    componentDidMount() {
        const { getComments, getPostById } = this.props
        const { id } = this.props.match.params
        console.log('postDetals - id', id)
        getPostById(id)
        getComments(id)

    }

    render() {
        let { comentario, post } = this.props
        console.log(this.props)
        return (
            <div>
                <div style={{
                    listStyleType: 'none',
                    justifyContent: "center",
                    marginLeft: '16px'
                }} >
                    {post && <PostInfo item={post} />}
                    {comentario.comentario && comentario.comentario.map((comentario) => {
                        return <Comments key={comentario.id} item={comentario} />
                    })}
                </div>
            </div>
        )
    }
}


function mapStateToProps({ post, comentario }) {

    return {
        post,
        comentario
    }
}

const mapDispatchToProps = dispatch => ({
    getComments(id) {
        dispatch(handleByParent(id));
    },
    getPostById(id) {
        dispatch(handleGetPostById(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetals)