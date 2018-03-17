import React from "react";

/**
 * import prop types to make sure component give its pops right
 */
import PropTypes from "prop-types";

/**
 * this to make image clickable
 */
import { Link } from "react-router-dom";

/**
 * Import material-ui things
 */
import { withStyles } from "material-ui/styles";
import Card, { CardMedia, CardContent } from "material-ui/Card";
import IconButton from "material-ui/IconButton";
import FavoriteIcon from "material-ui-icons/Favorite";

const styles = theme => ({
  card: {
    width: "100%"
  },
  media: {
    height: 180
  }
});

class PhotoComponent extends React.Component {
  render() {
    const { post, classes } = this.props;

    return (
      <Card className={classes.card}>
        <Link to={`/image-details/${post.id}`}>
          <CardMedia
            className={classes.media}
            image={post.display_src}
            title={post.caption}
          />
        </Link>
        <CardContent>
          <p>{post.caption}</p>
          <IconButton onClick={event => this.props.onLikeClicked(post.index)}>
            <FavoriteIcon color="error" /> {post.likes}
          </IconButton>
        </CardContent>
      </Card>
    );
  }
}

PhotoComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  onLikeClicked: PropTypes.func.isRequired
};

const Photo = withStyles(styles)(PhotoComponent);
export default Photo;
