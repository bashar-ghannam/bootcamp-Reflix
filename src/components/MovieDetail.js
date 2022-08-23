import React, { Component } from 'react';

class MovieDetail extends Component {
  render() {
    let movie = this.props.movies.find(
      (movie) => movie.id === parseInt(this.props.match.params.id)
    );
    return (
      <div className="movieDetail">
        <h1>
          {movie.title}({movie.year})
        </h1>
        <img src={movie.img} alt={movie.title} />
        <p>{movie.descrShort}</p>
      </div>
    );
  }
}

export default MovieDetail;
