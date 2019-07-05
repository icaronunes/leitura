import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/utils'
import { Link } from 'react-router-dom'
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';
import { setVotePost } from '../actions/post'

class Post extends PureComponent {

    handleVote = (id, vote) => {
        console.log('handleVote', id, vote)
        let { changeVote } = this.props
        changeVote(id, { option: vote })
    }

    render() {
        const post = this.props.item
        return (post ? <div style={{
            padding: '4px',
            borderStyle: 'solid',
            marginTop: '6px',
            borderWidth: '1px'
        }}>
            <Link to={{
                pathname: `/${post.category}/${post.id}`, 
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
                <h6 style={{ fontSize: '10px', marginTop: '10px', marginLeft: '10px' }}>{post.body}</h6>
                <h6 style={{ fontSize: '10px', marginTop: '10px', marginLeft: '10px' }}> Comentarios: {post.commentCount}</h6>

                <span style={{
                    display: 'inline',
                    margin: '0',
                    width: '100%'
                }}>
                    <h6 style={{
                        alignItems: 'left',
                        textAlign: 'left',
                        margin: '0',
                        width: '50%'
                    }}>{post.category}</h6>
                    <h6 style={{

                        alignItems: 'right',
                        textAlign: 'right',
                        margin: '0',
                        width: '50%'
                    }}>Votos: {post.voteScore}</h6>
                </span>
            </Link>

            <button onClick={(e) => { this.handleVote(post.id, 'downVote') }}>
                <MdArrowDownward style={{
                    alignItems: 'right',
                    textAlign: 'right',
                }} />
            </button>
            <button onClick={(e) => { this.handleVote(post.id, 'upVote') }}>
                <MdArrowUpward style={{
                    alignItems: 'right',
                    textAlign: 'right',
                }} />
            </button>
        </div> : null
        )
    }
}

function mapStateToProps({ post }) {
    return {
        post
    }
}

const mapDispatchToProps = dispatch => ({
    changeVote(id, vote) {
        dispatch(setVotePost(id, vote));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)
