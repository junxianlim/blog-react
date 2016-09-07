import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './components/main.jsx';
import PostsIndex from './containers/posts_index.jsx';
import PostsShow from './containers/posts_show.jsx';
import PostsNew from './components/posts_new.jsx';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
  </Route>
)
