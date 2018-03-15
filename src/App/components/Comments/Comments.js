import React from "react";

/**
 * import prop types to make sure component give its pops right
 */
import PropTypes from "prop-types";

/**
 * Import material-ui things
 */
import List, { ListItem, ListItemText } from "material-ui/List";
import Avatar from "material-ui/Avatar";
import WorkIcon from "material-ui-icons/Work";

class Comments extends React.Component {
  renderComments(comment, i) {
    return (
      <ListItem key={i}>
        <Avatar>
          <WorkIcon />
        </Avatar>
        <ListItemText inset primary={comment.text} secondary={comment.user} />
      </ListItem>
    );
  }

  render() {
    console.log(this.props);

    if (this.props.comments) {
      return (
        <List component="nav">
          {this.props.comments.map(this.renderComments)}
        </List>
      );
    } else {
      return (
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
  }
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Comments;
