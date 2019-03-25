import React, { Component } from 'react'
import { formatDate } from '../utils/utils'

class Comments extends Component {

    render() {
        let comentario = this.props.item
        return (
            <div>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    textJustify: 'auto'
                }}>
                    <h1>{comentario.author}</h1>
                    <h6>{formatDate(comentario.timestamp)}</h6>
                </span>
                <h6>{comentario.body}</h6>
                <h6>{comentario.voteScore}</h6>
            </div>
        )
    }


}

export default Comments