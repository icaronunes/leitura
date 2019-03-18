import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { objectToArray, formatDate } from '../utils/utils'
class Post extends PureComponent {

    render() {
        console.log('post-props', this.props)
        const { post } = this.props
        return (
            <div style={{
                border: '1px',
                borderColor: 'red',
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
            </div>
        )
    }
}

function mapStateToProps({ post }, props) {
    let lista = objectToArray(post)
    const { id } = props
    return {
        post: lista
            ? lista.find((item) => {
                return item.id === id
            })
            : []
    }
}

export default connect(mapStateToProps)(Post)
