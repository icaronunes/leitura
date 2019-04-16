import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/utils'
import { Link } from 'react-router-dom'
import { MdEdit } from 'react-icons/md';

class PostInfo extends PureComponent {

    render() {
        const post = this.props.item
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
                    width: '50%'                    
                }}/>
                </Link>
            </span>
            <h6 style={{ fontSize: '10px', marginTop: '10px', marginLeft: '10px' }}>{post.body}</h6>
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
                }}>{post.voteScore}</h6>
            </span>
        </div> : null
        )
    }
}

export default connect()(PostInfo)
