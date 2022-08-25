import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Movie extends Component {
  toggleRented = () => {
    if (this.props.movie.isRented) {
      this.props.toggleRented(this.props.movie.id);
    } else if (this.props.getBudget() >= 5) {
      this.props.toggleRented(this.props.movie.id);
    } else {
      alert('You do not have enough budget');
    }
  };
  render() {
    let movie = this.props.movie;
    return (
      <div className="movie">
        <Link to={`/movies/${movie.id}`}>
          <img src={movie.img} alt={movie.title} />
        </Link>
        <div className="movieIcon" onClick={this.toggleRented}>
          {movie.isRented ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-dash-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-plus-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
          )}
        </div>
      </div>
    );
  }
}

export default Movie;
