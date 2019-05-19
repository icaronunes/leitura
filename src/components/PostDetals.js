import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleByParent } from '../actions/comentarios'
import PostInfo from './PostInfo'
import Comments from './Comments';
import { handleGetPostById } from '../actions/post'

class PostDetals extends Component {

    componentDidMount() {
        const { getComments, getPostById } = this.props
        const { id } = this.props.match.params      
        getPostById(id)
        getComments(id)
    }
    
    render() {
        let { comentario, post } = this.props
        return (
            <div>
                <div style={{
                    listStyleType: 'none',
                    justifyContent: "center",
                    marginLeft: '16px'
                }} >
                    {post && <PostInfo item={post} />}
                    {Array.isArray(comentario) && comentario.map(coment => {            
                        if (!coment.deleted)                   
                        return <Comments key={coment.id} item={coment} />
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