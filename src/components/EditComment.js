import React, { Component } from 'react';
import { formatDate } from '../utils/utils'
import { handleEditComentario } from '../actions/comentarios'
import { connect } from 'react-redux'

class EditComment extends Component {
    state = {
        body: ''
    }

    componentDidMount() {
        this.setState({
            body: this.props.item.body
        })
    }


    handleTextEdit = (e) => {
        e.preventDefault()
        this.setState({
            body: e.target.value
        })
    }

    handleTextSubmit(e, comentario) {
        let { dispatch, handleEditarSave } = this.props
        e.preventDefault()        
        dispatch(handleEditComentario(comentario.id, this.state.body))
        handleEditarSave()              
    }

    render() {
        console.log('body', this.state.body)
        let comentario = this.props.item
        return (
            <div style={{
                border: "3px",
                borderTopStyle: "dotted",
                padding: '10px',
                justifyContent: "center",
                alignItems: 'justify',
                alignContent: 'center',
                display: 'block',
                alignItems: 'center'
            }}>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    alignSelf: 'center',
                    textJustify: 'auto'
                }}>
                    <h4 style={{
                        margin: "0px",
                        fontSize: '12px'
                    }} >{comentario.author}</h4>
                    <h4 style={{
                        marginLeft: "10px",
                        margin: '0',
                        fontSize: '10px'
                    }}>{formatDate(comentario.timestamp)}</h4>
                </span>

                <form
                    onSubmit={(e) => this.handleTextSubmit(e, comentario)}>
                    <textarea
                        value={this.state.body}
                        onChange={this.handleTextEdit}
                        maxLength={280}
                    />

                    <button type='submit'>Enviar</button>
                </form>

                <h6 style={{
                    margin: "2px"
                }}>{comentario.voteScore}</h6>
            </div>
        )
    }
}

export default connect()(EditComment)