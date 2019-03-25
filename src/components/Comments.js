import React, { Component } from 'react'
import { formatDate } from '../utils/utils'
import { disable } from '../reactnd-project-readable-starter/api-server/comments'
class Comments extends Component {

    handleExcluirComentario(idPost) {
        console.log(idPost)
        disable("token", idPost)
            .then(res => {
                console.log(res)
            })
    }

    handleEditarComentario() {

    }

    render() {
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

                <h6 style={{
                    margin: "4px"
                }}>{comentario.body}</h6>

                <h6 style={{
                    margin: "2px"
                }}>{comentario.voteScore}</h6>

                <button onClick={(e) => this.handleEditarComentario(comentario.id)}>Editar</button>
                <button onClick={(e) => this.handleExcluirComentario(comentario.id)}>Excluir</button>

            </div>
        )
    }
}

export default Comments