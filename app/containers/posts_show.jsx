import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index.js';
import { Link } from 'react-router';

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id)
  }

  deletePost() {
    this.props.deletePost(this.props.params.id).then(function() {
      this.context.router.push('/')
    }.bind(this))
  }

  render() {
    const { post } = this.props

    if (!post) {
      return (
        <div></div>
      )
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
        <button className="btn btn-danger" onClick={this.deletePost.bind(this)}>Delete</button>
        <Link to="/" className="btn btn-primary">
          Back
        </Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.post
  }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow)
