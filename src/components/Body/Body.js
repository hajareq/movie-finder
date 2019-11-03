import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import MovieList from "../movie-list";
import "./css/index.css";

class Body extends Component {
  state = {
    movie: "",
    movies: []
  };

  onInputChange(movie) {
    this.setState({ movie }, () => {
      axios
        .get(`https://api.tvmaze.com/search/shows?q=${this.state.movie}`)
        .then(res => {
          this.setState({ movies: res.data }, () => {
            if (this.props.onSearch) {
              this.props.onSearch(this.state.movies);
            }
          });
        });
    });
  }

  _handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="containerBig">
        <h1 className="find-movie">Movies & Series</h1>
        <form onSubmit={this._handleSubmit}>
          <div className="container-search-bar">
            <div className="search-bar">
              <input
                className="search-bar"
                placeholder="Search for movie, tv show.."
                onChange={event => this.onInputChange(event.target.value)}
                name="search"
              />
            </div>
            <button type="submit">
              <SearchIcon />
              Search
            </button>
          </div>
          <MovieList movies={this.state.movies} />
        </form>
      </div>
    );
  }
}
export default Body;
