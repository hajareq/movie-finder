import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import "./css/index.css";

class MovieList extends Component {
  render() {
    return (
      <div className="container">
        {this.props.movies.map(item => {
          let image;
          if (item.show.image === null)
            image =
              "https://i.pinimg.com/originals/b1/44/18/b1441899d974b2d1361947b6e6f713a0.jpg";
          else image = item.show.image.medium;
          return (
            <Link
              to={`/movies/${item.show.id}`}
              key={item.show.id}
              className="link"
            >
              <Card className="card">
                <img className="movie-image" src={image} alt="" />
                <div className="movie-title">{item.show.name}</div>
              </Card>
            </Link>
          );
        })}
      </div>
    );
  }
}
export default MovieList;
