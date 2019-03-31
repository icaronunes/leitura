import React, { Component } from 'react'
import { formatDate } from '../utils/utils'
import { handleDeleteItem } from '../actions/comentarios'
import { connect } from 'react-redux'
import EditComment from './EditComment'

class Comments extends Component {

    state = ({
        edit: false,
    })

    handleExcluirComentario(idPost) {
        let { dispatch } = this.props
        dispatch(handleDeleteItem(idPost.id))
    }

    handleEditarComentario = () => {
        this.setState((prev, props) => ({
            edit: !prev.edit
        }))
    }

    render() {
        let comentario = this.props.item

        return (this.state.edit ? <EditComment item={comentario}
            handleEditarSave={this.handleEditarComentario} /> :
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


export default connect()(Comments)