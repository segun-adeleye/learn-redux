import React, { Component } from 'react';

import Photo from './Photo';
import Comments from './Comments';

export default class Single extends Component {
  render() {
    const { photoId } = this.props.params;
    const { posts, comments } = this.props;
    const i = posts.findIndex(
      post => post.code === this.props.params.photoId
    );
    const post = posts[i];
    const postComments = comments[photoId] || [];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments comments={postComments} />
      </div>
    );
  }
}
