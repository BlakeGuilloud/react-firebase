import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import AppContainer from './containers/AppContainer/index';
import PostsContainer from './containers/PostsContainer/index';
import AddPostContainer from './containers/AddPostContainer/index';

const Routes = (props) =>
  <Router {...props}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={PostsContainer} />
      <Route path="/add-post" component={AddPostContainer} />
    </Route>
  </Router>;

export default Routes;