import React, { Component } from "react";
import "./css/index.css";

class MovieDetail extends Component {
  state = {
    id: null,
    name: "",
    score: null,
    type: "",
    language: "",
    runtime: null,
    summary: "",
    image: ""
  };

  componentDidMount = () => {
    const { params } = this.props.match;

    let movieArray = this.props.movies.filter(
      movie => movie.show.id == params.id
    );
    let movie = movieArray[0];
    const image =
      movie.show.image === null
        ? "https://i.pinimg.com/originals/b1/44/18/b1441899d974b2d1361947b6e6f713a0.jpg"
        : movie.show.image.medium;
    const name = movie.show.name;
    const score = movie.score;
    const type = movie.show.type;
    const language = movie.show.language;
    const runtime = movie.show.runtime;
    const summary =
      movie.show.summary === null
        ? movie.show.summary
        : movie.show.summary.replace(/(<([^>]+)>)/gi, "");
    this.setState({ name, score, type, language, runtime, summary, image });
  };
  render() {
    return (
      <div className="wrapper">
        <div className="movie-name-detail">{this.state.name}</div>
        <div className="container-movie-detail">
          <img className="movie-image-detail" src={this.state.image} alt="" />
          <div>
            <table className="table-movie-detail" aria-label="caption table">
              <tr>
                <th className="row">Score</th>
                <th className="row">{this.state.score}</th>
              </tr>
              <tr>
                <th className="row">Type</th>
                <th className="row">{this.state.type}</th>
              </tr>
              <tr>
                <th className="row">Language</th>
                <th className="row">{this.state.language}</th>
              </tr>
              <tr>
                <th className="row">Run Time</th>
                <th className="row">{this.state.runtime} min</th>
              </tr>
              <tr>
                <th className="row">Summary</th>
                <th className="row">{this.state.summary}</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
