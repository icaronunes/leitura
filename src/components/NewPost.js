import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { generateUID } from '../utils/utils'
import { handleAddPost } from '../actions/post'
import { Link } from 'react-router-dom'
import { EWOULDBLOCK } from 'constants';
class NewPost extends PureComponent {

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
        let savePost = this.props.savePost
        savePost(post)

    }

    setItemToState(item) {
        console.log('item', item)
        this.setState({
            title: item.title,
            body: item.body,
            author: item.author,
            category: item.category
        })
    }

    render() {
        console.log("NewPost", this.props)
        let categorias = this.props.categorias
        let item = this.props.item.location.state.post
        let { body, title, author, category } = this.state

        if (item != null) this.setItemToState(item)

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
                            <option disabled={true} value={"Categoria"} selected={true} >Categoria</option>
                            {categorias.categories && categorias.categories.map((categoria) => {
                                return <option key={categoria.name} value={categoria.name}>{categoria.name}</option>
                            })}
                        </select>
                        <Link to={{
                            pathname: `/${this.state.category}`
                        }}>
                            <input type='submit' />
                        </Link>
                    </form>
                    :

                    <form onSubmit={this.handleSavePost} >
                        Titulo: <input type='text' name='title' value={title} onChange={(e) => {
                            this.setState({
                                title: e.target.value
                            })
                        }} />
                        Post: <textarea type='text' maxLength={140} name='body' value={body} onChange={(e) => {
                            this.setState({
                                body: e.target.value
                            })
                        }} />
                        Autor: <input type='text' name='author'
                        value={author} onChange={(e) => {
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
                            <option disabled={true} selected={true}  value={category}>{category}</option>
                        </select>
                        <Link to={{
                            pathname: `/${this.state.category}`
                        }}>
                            <input type='submit' />
                        </Link>
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
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)
