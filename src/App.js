import React, { Component } from "react";
import axios from "axios";

import HomePage from "./components/Pages/HomePage";
import SearchParams from "./components/SearchParams";
import Movies from "./components/Movies";

class App extends Component {
  state = {
    movieAPi: "4be3dca1c64c2fb77f30770cd942a1e2",
    movies: []
  };

  componentDidMount() {
    this.handleMoviesSearch();
  }

  handleMoviesSearch = movie => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${this.state.movieAPi}`
      )
      .then(data => this.setState({ movies: data.data.results }))
      .catch(error =>
        console.log(
          error,
          "oops!,something went wrong,please check our connection and try again"
        )
      );
  };

  render() {
    const { movies } = this.state;
    return (
      <div>
        <HomePage />
        <SearchParams searchMoviesDB={this.handleMoviesSearch} />

        <Movies movieData={movies} />
      </div>
    );
  }
}

export default App;
