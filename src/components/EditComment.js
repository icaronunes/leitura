import React,{ Component } from 'react';
import { formatDate } from '../utils/utils'

class EditComment extends Component {

    handleTextEdit(e, comentario) {
        console.log(comentario)
        e.preventDefault()
        this.setState({
            body: e.target.value
        })
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

                <form text={comentario.body} onChange={(e) => { this.handleTextEdit(e) }}></form>

                <h6 style={{
                    margin: "2px"
                }}>{comentario.voteScore}</h6>

                <button onClick={(e) => this.handleTextEdit(e, comentario)}>Enviar</button>

            </div>
        )
    }
}

export default EditComment