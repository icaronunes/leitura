import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleByParent } from '../actions/comentarios'
import PostInfo from './PostInfo'
import Comments from './Comments';

class PostDetals extends Component {

    componentDidMount() {
        const { getComments } = this.props
        const { id } = this.props.match.params
        getComments('8xf0y6ziyjabvozdd253nd')
    }

    render() {
        let { comentarios, post } = this.props

        return (
            <div>
                <div style={{
                    listStyleType: 'none',
                    justifyContent: "center",
                    marginLeft: '16px'
                }} >
                    <PostInfo item={post} />
                    {comentarios && comentarios.map((comentario) => {
                        return <Comments key={comentario.id} item={comentario} />
                    })}

                </div>

            </div>
        )
    }
}


function mapStateToProps({ post, comentario }, item) {
    console.log('PostDetails', post, comentario, item.match.params.id)
    let posts = post.post ? post.post : []
    let comentarios = comentario.comentario ? comentario.comentario : []
    let id = item.match.params.id

    posts = posts.filter(item =>
        id === item.id
    )

    return {
        post: posts,
        comentarios
    }
}

const mapDispatchToProps = dispatch => ({
    getComments(id) {
        dispatch(handleByParent(id));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetals)