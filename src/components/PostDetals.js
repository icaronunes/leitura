import React, { Component, View } from 'react'
import { connect } from 'react-redux';
import { handleByParent } from '../actions/comentarios'
import PostInfo from './PostInfo'
import Comments from './Comments';
import Erro from './Erro'
import { handleGetPostById } from '../actions/post'

class PostDetails extends Component {

    componentDidMount() {
        const { getComments, getPostById } = this.props
        const { id } = this.props.match.params
        getPostById(id)
        getComments(id)
    }

    render() {
        let { comentario, post } = this.props
        console.log('PostDetals', this.props)
        return (
            <div>
                <div style={{
                    listStyleType: 'none',
                    justifyContent: "center",
                    marginLeft: '16px'
                }}>
                    {Array.isArray(post) && Object.keys(post[0]).length >= 1 ?
                        <div>
                            <PostInfo item={post} />
                            {Array.isArray(comentario) && comentario.map(coment => {
                                if (!coment.deleted)
                                    return <Comments key={coment.id} item={coment} />
                            })}
                        </div>
                        :
                        <div  style={{
                            justifyContent: "center",
                            alignItems: 'justify',
                            alignContent: 'center',
                            display: 'flex',                          
                        }}>
                            <Erro />
                        </div>
                    }
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

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails) 