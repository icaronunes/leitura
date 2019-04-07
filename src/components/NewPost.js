import React, { PureComponent } from 'react'
import { add } from '../reactnd-project-readable-starter/api-server/posts'
import { generateUID } from '../utils/utils'

export default class NewPost extends PureComponent {

    state = {
        title: '',
        body: '',
        author: '',
        category: '',
    }

    handleSavePost = (e) => {
        e.preventDefault()

        let post = {
            title: this.state.title,
            body: this.state.body,
            author: this.state.author,
            category: this.state.category,
            timestamp: Date.now(),
            id: generateUID()
        }
        //console.log(post)
        add('token', post)
        .then((res) => {
            console.log(res)
        })
    }

    render() {

        let categorias = this.props.categorias
        let body = this.state.body    
        return (
            <div >
                <form onSubmit={this.handleSavePost} >
                    Titulo: <input type='text' name='title' onChange={(e) => {
                        this.setState({
                            title: e.target.value
                        })
                    }} />
                    Post: <textarea type='text' maxLength={140} name='body' value={body}  onChange={(e) => {
                        this.setState({
                            body: e.target.value
                        })
                    }} />
                    Autor: <input type='text' name='author' onChange={(e) => {
                        this.setState({
                            author: e.target.value
                        })
                    }} />
                    Categoria:
                    <select name="category" onChange={(e) => {
                        this.setState({
                            category: e.target.value
                        })
                    }}>
                        <option disabled={true} selected={true}>Categoria</option>
                        {categorias.categories && categorias.categories.map((categoria) => {
                            return <option key={categoria.name} value={categoria.name}>{categoria.name}</option>
                        })}
                    </select>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}
