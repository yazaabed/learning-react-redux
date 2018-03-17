/**
 * Import react from react don't worry its will not be duplicate
 * if its imported from multiple places
 */
import React from "react";

/**
 * import prop types to make sure component give its pops right
 */
import PropTypes from "prop-types";

/**
 * Import material-ui things
 */
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";

/**
 * Import photo compoenent
 */
import { Photo } from "../../components";

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center"
  }
});

class ImageGridComponent extends React.Component {
  render() {
    const { classes, posts, increment } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={40}>
          {posts.map((post, index) => (
            <Grid item xs={12} sm={6} lg={4} key={post.id}>
              <Photo
                post={{
                  ...post,
                  index
                }}
                onLikeClicked={increment}
              />
            </Grid>
          ))}
        </Grid>
        <hr
          style={{
            margin: 30
          }}
        />
      </div>
    );
  }
}

ImageGridComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

const ImageGrid = withStyles(styles)(ImageGridComponent);

export { ImageGrid };
