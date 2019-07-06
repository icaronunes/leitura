import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getByCategory, handleGetPost } from '../actions/post'
import Post from './Post'
class List extends Component {

    componentDidMount() {
        const categoria = this.props.match.params.category
        if (categoria === undefined) {
            this.props.getAllPost()
        } else {
            this.props.byCategory(categoria)
        }
    }

    componentDidUpdate(prevProps) {
        console.log('componentDidUpdate', prevProps,
            'prevState', this.props)
        if (prevProps.match.params.category !== this.props.match.params.category) {
            const categoria = this.props.match.params.category
            if (categoria === undefined) {
                this.props.getAllPost()
            } else {
                this.props.byCategory(categoria)
            }
        }
    }

    render() {
        const { posts } = this.props
        return (
            <div>
                <ul>
                    {Object.getPrototypeOf(posts) !== Object.prototype && posts.map((element) => (
                        <li key={element.id} style={{
                            listStyleType: 'none',
                            justifyContent: "center",
                        }} >
                            <Post item={element} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ post }, props) {

    return {
        posts: post
    }
}

const mapDispatchToProps = (dispatch) => ({
    byCategory(categoria) {
        dispatch(getByCategory(categoria))
    },
    getAllPost() {
        dispatch(handleGetPost())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
