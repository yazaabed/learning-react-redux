/**
 * Import react and dep for this app
 */
import React, { Component } from "react";

/**
 * Import needed pages tp show image grid
 */
import * as Pages from "./scenes";

/**
 * Import main css for this project
 */
import "./App.css";

/**
 * Import material ui things
 */
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";

/**
 * Import redux things
 */
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "./actions/actionCreators";

/**
 * This Link to make image clickable
 * Import all things need to run the router
 */
import { Route, Link, Redirect, Switch, withRouter } from "react-router-dom";

class AppComponent extends Component {
  render() {
    return (
      <div className="reduxstagram-app">
        <h1
          style={{
            textAlign: "center"
          }}
        >
          Welcome to Reduxstagram
        </h1>

        <hr
          style={{
            margin: 30
          }}
        />

        <AppBar position="static" color="default">
          <Toolbar>
            <Link to={"/"}>Home</Link>
          </Toolbar>
        </AppBar>

        <hr
          style={{
            margin: 30
          }}
        />

        <Switch>
          <Route
            path="/"
            exact
            render={({ match }) => {
              return React.cloneElement(<Pages.ImageGrid />, {
                ...this.props
              });
            }}
          />
          <Route
            path="/image-details/:id"
            exact
            render={({ match }) => {
              return React.cloneElement(
                <Pages.ImageDetails postId={match.params.id} />,
                {
                  ...this.props
                }
              );
            }}
          />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = withRouter(
  connect(mapStateToProps, mapDispachToProps)(AppComponent)
);

export default App;
