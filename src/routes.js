import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import AppContainer from './containers/AppContainer/index';
import PostsContainer from './containers/PostsContainer/index';
import AddPostContainer from './containers/AddPostContainer/index';
import ViewPostContainer from './containers/ViewPostContainer/index';

const Routes = (props) =>
  <Router {...props}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={PostsContainer} />
      <Route path="/view-post/:id" component={ViewPostContainer} />
      <Route path="/add-post" component={AddPostContainer} />
    </Route>
  </Router>;

export default Routes;