import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { generateUID } from '../utils/utils'
import { handleEdit, handleAddPost } from '../actions/post'
import { withRouter } from 'react-router-dom'
class NewPost extends PureComponent {

    state = {
        title: '',
        body: '',
        author: '',
        category: '',
    }

    componentDidMount() {
        console.log("new Post", this.props)
        if (this.props.item.location.state != null) {
            let item = this.props.item.location.state.post          
            this.setItemToState(item)
            this.setState({
                id: item.id
            })
        }
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
        let savePost = this.props.savePost
        savePost(post)
        console.log('savePòst', post)
        this.props.history.push(`/${this.state.category}`)
    }


    handleEditPost = (e) => {
        e.preventDefault()
        let post = {
            title: this.state.title,
            body: this.state.body,
            author: this.state.author,
            category: this.state.category,
            timestamp: Date.now(),
            id: this.props.item.match.params.id
        }
        let editPost = this.props.editPost
        editPost(post.id, post)       
        this.props.history.push(`/post/${post.id}`)
    }

    setItemToState(item) {
        this.setState({
            title: item.title,
            body: item.body,
            author: item.author,
            category: item.category
        })
    }

    handleTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    render() {
        let categorias = this.props.categorias
        let item = null
        if (this.props.item.location.state != null) {
            item = this.props.item.location.state.post
        }
        let { body, title, author, category } = this.state           
        return (
            <div>
                {item == null ?
                    <form onSubmit={this.handleSavePost} >
                        Titulo: <input type='text' name='title' onChange={(e) => {
                            this.setState({
                                title: e.target.value
                            })
                        }} />
                        Post: <textarea type='text' maxLength={140} name='body' value={body} onChange={(e) => {
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
                    <select name="category" defaultValue={"category"} onChange={(e) => {
                            this.setState({
                                category: e.target.value
                            })
                        }}>
                            <option disabled={true} defaultValue={"Categoria"} selected={true} >Categoria</option>
                            {categorias.categories && categorias.categories.map((categoria) => {
                                if (categoria.name != 'todos')
                                    return <option key={categoria.name} value={categoria.name}>{categoria.name}</option>
                            })}
                        </select>
                        <input type='submit' />
                    </form>
                    :

                    <form onSubmit={this.handleEditPost} >
                        Titulo: <input type='text' name='title' value={title} onChange={this.handleTitle} />
                        Post: <textarea type='text' maxLength={140} name='body' value={body} onChange={(e) => {
                            this.setState({
                                body: e.target.value
                            })
                        }} />
                        Autor: <input type='text' name='author' disabled={true} value={author}
                            onChange={(e) => {
                                this.setState({
                                    author: e.target.value
                                })
                            }} />
                        Categoria:
                        <select name="category" defaultValue={"category"} onChange={(e) => {
                            this.setState({
                                category: e.target.value
                            })
                        }}>
                            <option disabled={true} selected={true} value={category}>{category}</option>
                        </select>
                        <input type='submit' />
                    </form>}
            </div>
        )
    }
}

function mapStateToProps({ post }, item) {
    return {
        item,
        post
    }
}

const mapDispatchToProps = (dispatch) => ({
    savePost(post) {
        dispatch(handleAddPost(post))
    },
    editPost(id, post) {
        dispatch(handleEdit(id, post))
    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewPost))
