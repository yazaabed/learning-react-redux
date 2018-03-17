import React from "react";

/**
 * import prop types to make sure component give its pops right
 */
import PropTypes from "prop-types";

/**
 * Import material-ui things
 */
import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "material-ui/List";
import Avatar from "material-ui/Avatar";
import IconButton from "material-ui/IconButton";
import WorkIcon from "material-ui-icons/Work";
import ClearIcon from "material-ui-icons/Clear";

import AddCommentsForm from "./components/AddCommentsForm/AddCommentsForm";

class Comments extends React.Component {
  renderComments(comment, i) {
    return (
      <ListItem key={i}>
        <Avatar>
          <WorkIcon />
        </Avatar>
        <ListItemText inset primary={comment.text} secondary={comment.user} />
        <ListItemSecondaryAction>
          <IconButton
            onClick={event =>
              this.props.onRemoveComments(this.props.postCode, i)
            }
          >
            <ClearIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }

  render() {
    let renderedComponents = [];

    if (this.props.comments && this.props.comments.length) {
      renderedComponents.push(
        <List component="nav">
          {this.props.comments.map(this.renderComments.bind(this))}
        </List>
      );
    } else {
      renderedComponents.push(
        <div
          style={{
            margin: 30,
            padding: 20,
            textAlign: "center"
          }}
        >
          <h1>There is no comments</h1>
        </div>
      );
    }

    renderedComponents.push(
      <AddCommentsForm
        onFormSubmit={this.props.onAddComments}
        postCode={this.props.postCode}
      />
    );

    return renderedComponents;
  }
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemoveComments: PropTypes.func.isRequired,
  onAddComments: PropTypes.func.isRequired,
  postCode: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired
};

export default Comments;
