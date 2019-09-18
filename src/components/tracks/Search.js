import React, { Component } from "react";
import axios from "axios";
import { FaMusic } from "react-icons/fa";

import { MusicConsumer } from "../context";

class Search extends Component {
  state = {
    trackTitle: "",
    apiURL: "https://api.musixmatch.com/ws/1.1/",
    apiKey: "d73f61ebc30a9ca47af521ec4c8bb5c8"
  };

  handleChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  handleSearchTrack = (dispatch, e) => {
    this.setState({ loading: true });
    e.preventDefault();

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/${this.state.apiURL}track.search?q_track=${this.state.trackTitle} bieber&page_size=10&page=1&s_track_rating=desc&apikey=${this.state.apiKey}`
      )
      .then(res => {
        dispatch({
          type: "SEARCH_TRACK",
          payload: res.data.message.body.track_list,
          loading: false
        });
      })
      .catch(error => {
        throw error;
      });
  };
  render() {
    return (
      <MusicConsumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 p4">
              <h1 className="display-4 text-center">
                <FaMusic /> Search For A Song
              </h1>
              <p className="lead text-center">Get the Lyrics for any song</p>
              <form onSubmit={this.handleSearchTrack.bind(this, dispatch)}>
                <div className="form-group">
                  <input
                    name="trackTitle"
                    onChange={this.handleChange}
                    value={this.state.trackTitle}
                    type="text"
                    className="form-control lg"
                    placeholder="Song title..."
                  />
                </div>
                <button
                  className="btn btn-dark btn-lg btn-block mb-5"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          );
        }}
      </MusicConsumer>
    );
  }
}

export default Search;
