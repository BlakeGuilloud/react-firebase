import React, { Component } from 'react';
import * as firebase from 'firebase';

import config from './firebase-config';

class App extends Component {
  state = {
    posts: {},
    loading: true,
  };

  componentWillMount() {
    firebase.initializeApp(config);
    
    let postsRef = firebase.database().ref('posts');

    postsRef.on('value', (snapshot) => {
      this.setState({
        posts: snapshot.val(),
        loading: false
      });
    });
  }

  render() {
    return (
      <div className="App">
        {this.props.children && React.cloneElement(this.props.children, {
          firebase: firebase.database(),
          posts: this.state.posts,
          loading: this.state.loading
        })}
      </div>
    );
  }
}

export default App;
