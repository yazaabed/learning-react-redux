import React from "react";

/**
 * Import material-ui things
 */
import Paper from "material-ui/Paper";

/**
 * Import photo compoenent
 */
import { Photo, Comments } from "../../components";

class ImageDetails extends React.Component {
  render() {
    const postId = this.props.postId;
    const post = this.props.posts.find(post => post.id === postId);
    const postComments = this.props.comments[post.code];
    const index = this.props.posts.indexOf(post);

    post.index = index;

    return (
      <Paper>
        <Photo post={post} onLikeClicked={this.props.increment} />
        <Comments
          comments={postComments}
          postCode={post.code}
          postId={post.id}
          onRemoveComments={this.props.removeComment}
          onAddComments={this.props.addComment}
        />
      </Paper>
    );
  }
}

export { ImageDetails };
