import React, { Component } from 'react';
import Movie from './Movie';

class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
    };
  }

  getRentedMovies = () => {
    let rentedMovies = this.props.movies.filter((movie) => movie.isRented);
    if (rentedMovies.length > 0) {
      return (
        <div className="catalogMovies">
          Rented :
          <div className="movies">
            {rentedMovies.map((movie, index) => (
              <Movie
                movie={movie}
                key={index}
                toggleRented={this.props.toggleRented}
              />
            ))}
          </div>
        </div>
      );
    }
  };

  handleInputChange = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  getBudget = () => {
    let count = 0;
    this.props.movies.forEach((movie) => {
      if (movie.isRented) {
        count += 5;
      }
    });
    return 15 - count;
  };

  render() {
    return (
      <div className="catalog">
        <div className="catalogHeader">
          <input
            type="text"
            value={this.state.searchInput}
            id="name-input"
            onChange={this.handleInputChange}
            placeholder="Search..."
          />
          <span>Budget : ${this.getBudget()}</span>
        </div>
        {this.getRentedMovies()}
        <div className="catalogMovies">
          Catalog :
          <div className="movies">
            {this.props.movies
              .filter((movie) =>
                movie.title
                  .toLowerCase()
                  .includes(this.state.searchInput.trim().toLowerCase())
              )
              .map((movie, index) => (
                <Movie
                  movie={movie}
                  key={index}
                  toggleRented={this.props.toggleRented}
                  getBudget={this.getBudget}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Catalog;
