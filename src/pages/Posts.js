import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Post } from 'pages';

const Posts = ({ match }) => {
  const activeStyle = {
    color: 'red',
    fontSize: '1.1rem'
  }
  return (
    <div>
      <h2>Post Link</h2>
      <ul>
        <li><NavLink to={`${match.url}/1`} activeStyle={activeStyle}>Post #1</NavLink></li>
        <li><NavLink to={`${match.url}/2`} activeStyle={activeStyle}>Post #2</NavLink></li>
        <li><NavLink to={`${match.url}/3`} activeStyle={activeStyle}>Post #3</NavLink></li>
        <li><NavLink to={`${match.url}/4`} activeStyle={activeStyle}>Post #4</NavLink></li>
      </ul>
      <Route exact path={match.url} render={() => (<h3>Please select my post</h3>)} />
      <Route path={`${match.url}/:id`} component={Post} />
    </div>
  );
};

export default Posts;