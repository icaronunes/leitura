import React, { Component } from 'react'
import { formatDate } from '../utils/utils'
import { handleDeleteItem, handleEditComentario } from '../actions/comentarios'
import { connect } from 'react-redux'
class Comments extends Component {

    state = ({
        edit: true,
        body: ''
    })

    handleExcluirComentario(idPost) {
        console.log('handleExcluirComentario', this.props)
        let { dispatch } = this.props
        dispatch(handleDeleteItem(idPost.id))
    }

    handleEditarComentario() {
        console.log('handleEditarComentario', this.props)
        let { dispatch } = this.props
        dispatch(handleEditComentario)
    }

    handleTextEdit(e) {
        console.log(e)
        e.preventDefault()
        this.setState({
            body: e.target.value
        })
    }

    render() {
        let comentario = this.props.item

        return (this.state.edit ? text(comentario) :
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

                <h6 style={{
                    margin: "4px"
                }}>{comentario.body}</h6>

                <h6 style={{
                    margin: "2px"
                }}>{comentario.voteScore}</h6>

                <button onClick={(e) => this.handleEditarComentario(comentario.id)}>Editar</button>
                <button onClick={(e) => this.handleExcluirComentario(comentario)}>Excluir</button>

            </div>
        )
    }
}

function text(comentario) {
    return (<div style={{
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

        <form text={comentario.body} onChange={(e) => { this.handleTextEdit(e) }}></form>

        <h6 style={{
            margin: "2px"
        }}>{comentario.voteScore}</h6>

        <button onClick={(e) => this.handleTextEdit(e)}>Enviar</button>

    </div>)
}

export default connect()(Comments)