import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'

class List extends Component {
    render() {
        const { posts } = this.props
        console.log('components', posts)
        return (
            <div>
                <ul>
                    {posts && posts.map((element) => (
                        <li style={{
                            listStyleType: 'none'
                        }} key={element.id}>
                            <Post id={element.id} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ categorias, post }, cat) {

    console.log('post', post)
    console.log('cat', cat)
    //Usar api para pegar por categoria
    let keys = Object.keys(post)
    let posts = keys.map(key => {
        return post[key]
    })
    console.log('posts', posts)
    return {
        posts: posts
            ? posts.forEach(item => {
                console.log('item', item.category)
                return item.category === cat
            }) : posts

    }
}

export default connect(mapStateToProps)(List)

