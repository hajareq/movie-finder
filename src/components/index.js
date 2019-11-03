import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Body from "./Body/Body";
import Footer from "./footer";
import MovieDetail from "./MovieDetail";

class App extends Component {
  state = {
    movies: []
  };
  shouldComponentUpdate() {
    return false;
  }
  _onSearch = movies => {
    this.setState({ movies });
  };
  render() {
    return (
      <Fragment>
        <Router>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Body onSearch={this._onSearch} />}
            />
            <Route
              exact
              path="/movies/:id"
              render={props => (
                <MovieDetail {...props} movies={this.state.movies} />
              )}
            />
          </Switch>
          <Footer />
        </Router>
      </Fragment>
    );
  }
}

export default App;
