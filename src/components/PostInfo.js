import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/utils'
import { Link } from 'react-router-dom'
import { MdEdit, MdArrowDownward, MdArrowUpward } from 'react-icons/md';
import { setVotePost } from '../actions/post'
import NewComments from './NewComments';

class PostInfo extends PureComponent {

    state = {
        edit: false,
    }

    handleVote = (id, vote) => {
        let { changeVote } = this.props
        changeVote(id, { option: vote })
    }

    handleNewComments = () => {
        this.setState((state, props) => ({
            edit: !state.edit
        }))
    }

    render() {
        const post = this.props.item
        console.log("postInfo", post)
        return (post ? <div style={{
            padding: '4px',
            borderStyle: 'solid',
            marginTop: '6px',
            borderWidth: '1px'
        }}>
            <h3 style={{ margin: '0', fontSize: '14px' }}> {post.title}</h3>
            <span style={{
                display: 'flex',
                alignItems: 'center',
                margin: '0'
            }}>
                <h5 style={{ margin: '0', fontSize: '12px' }}>{post.author}</h5>
                <h6 style={{ margin: '0', marginLeft: '10px', fontSize: '8px' }}>{formatDate(post.timestamp)}</h6>
                <Link to={{
                    pathname: `/edit/${post.id}`,
                    state: { post: post }
                }}>
                    <MdEdit style={{
                        alignItems: 'right',
                        textAlign: 'right',
                        margin: '0',
                        width: '100%'
                    }} />
                </Link>
            </span>
            <h6 style={{ fontSize: '10px', marginTop: '10px', marginLeft: '10px', marginBottom: '5px' }}>{post.body}</h6>
            <span style={{
                display: 'inline',
                margin: '0',
            }}>
                <h6 style={{
                    alignItems: 'left',
                    textAlign: 'left',
                    margin: '0',
                    width: '0'
                }}>{post.category}</h6>
                <span>
                    <h6 style={{
                        alignItems: 'right',
                        textAlign: 'right',
                        marginTop: '10px',
                        marginBottom: '10px',
                        width: '0'
                    }}>{post.voteScore}
                    </h6>
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

                    {this.state.edit ? <NewComments id={post.id} handleToogleComments={this.handleNewComments} /> : <button style={{
                        alignItems: 'right',
                        textAlign: 'right'
                    }}
                        onClick={(e) => { this.handleNewComments() }}>
                        Comentar
                    </button>}
                </span>
            </span>
        </div> : null
        )
    }
}

const mapDispatchToProps = dispatch => ({
    changeVote(id, vote) {
        dispatch(setVotePost(id, vote));
    }
})

export default connect(null, mapDispatchToProps)(PostInfo)
