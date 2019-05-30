import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setSaveComments } from '../actions/comentarios'
import { withRouter } from 'react-router-dom'
import { generateUID } from '../utils/utils'

class NewComments extends Component {
    state = {
        body: '',
        author: ''
    }

    handleBody = (e) => {
        e.preventDefault()
        this.setState({
            body: e.target.value
        })
    }

    handleAuthor = (e) => {
        e.preventDefault()
        this.setState({
            author: e.target.value
        })
    }

    handleSaveComentario = (e) => {
        e.preventDefault()
        let { dispatch } = this.props
        let comentario = {
            id: generateUID(),
            timestamp: Date.now(),
            body: this.state.body,
            author: this.state.author,
            parentId: this.props.id
        }
        dispatch(setSaveComments(comentario))
        let handleToogleComments = this.props.handleToogleComments
        handleToogleComments()

    }

    render() {
        return (
            <div>
                <div style={{
                    border: "3px",
                    padding: '10px',
                    justifyContent: "center",
                    alignItems: 'justify',
                    alignContent: 'center',
                    display: 'block',
                }}>
                    <span>
                        Author:
                <input type='text' maxLength={140} name='author' value={this.state.author}
                            onChange={this.handleAuthor} />
                    </span>
                </div>
                <div style={{
                    border: "3px",
                    padding: '10px',
                    justifyContent: "center",
                    alignItems: 'justify',
                    alignContent: 'center',
                    display: 'block',
                }}>
                    <span>
                        Comentario:
                <textarea
                            value={this.state.body}
                            onChange={this.handleBody}
                            maxLength={280}
                        />
                    </span>
                    <form
                        onSubmit={(e) => this.handleSaveComentario(e)}>
                        <button type='submit'>Enviar</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(connect()(NewComments))