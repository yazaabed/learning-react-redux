import React from "react";

/**
 * Import material-ui things
 */
import Paper from "material-ui/Paper";

/**
 * Import static data
 */
import * as data from "../../../data";

/**
 * Import photo compoenent
 */
import { Photo, Comments } from "../../components";

class ImageDetails extends React.Component {
  render() {
    const postId = this.props.match.params.id;
    const post = data.posts.find(post => post.id === postId);
    const postComments = data.comments[post.code];

    return (
      <Paper>
        <Photo post={post} />
        <Comments comments={postComments} />
      </Paper>
    );
  }
}

export { ImageDetails };
