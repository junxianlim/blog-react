import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';
import { titleInput, categoryInput, contentInput } from './form_inputs/index.jsx';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(props) {
    this.props.createPost(props).then(function() {
      this.context.router.push('/')
    }.bind(this))
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a new Post</h3>
        <Field name="title" component={titleInput} />
        <Field name="categories" component={categoryInput} />
        <Field name="content" component={contentInput} />
        <div className="form-group">
          <button type="submit" className="btn btn-primary"> Create Post </button>
          <Link to="/" className="btn btn-danger">
            Cancel
          </Link>
        </div>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Add a title"
  }

  if (!values.categories) {
    errors.categories = "Add a category"
  }

  if (!values.content) {
    errors.content = "Please add some content"
  }

  return errors;
}

const PostNewReduxForm = reduxForm({
  form: 'PostsNewForm',
  validate
})(PostsNew);

export default connect(null, { createPost })(PostNewReduxForm)
