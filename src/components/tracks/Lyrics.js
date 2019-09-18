import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Spinner from "../layouts/Spinner";
import Moment from "react-moment";

class Lyrics extends Component {
  state = {
    tracks: {},
    lyrics: {},
    apiURL: "https://api.musixmatch.com/ws/1.1/",
    apiKey: "d73f61ebc30a9ca47af521ec4c8bb5c8"
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/${this.state.apiURL}track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${this.state.apiKey}`
      )
      .then(res => {
        this.setState({ lyrics: res.data.message.body.lyrics });
        return axios.get(
          `https://cors-anywhere.herokuapp.com/${this.state.apiURL}track.get?track_id=${this.props.match.params.id}&apikey=${this.state.apiKey}`
        );
      })
      .then(res => this.setState({ tracks: res.data.message.body.track }))
      .catch(error => console.log(error));
  }

  render() {
    const { tracks, lyrics } = this.state;
    console.log(tracks);
    if (
      tracks === undefined ||
      lyrics === undefined ||
      Object.keys(tracks).length === 0 ||
      Object.keys(lyrics).length === 0
    ) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            <FaArrowLeft /> Go Back
          </Link>
          <div className="card">
            <h5 className="card-header">
              {tracks.track_name} by{" "}
              <span className="text-secondary">{tracks.artist_name}</span>
            </h5>

            <div className="card-body">
              <p className="card-text">{lyrics.lyrics_body}</p>
            </div>
          </div>

          <div className="list-group mt-3">
            <li className="list-group-item">
              <strong>Album ID:</strong>
              {tracks.album_id}
            </li>
            <li className="list-group-item">
              <strong>Song Genre:</strong>
              {
                tracks.primary_genres.music_genre_list[0].music_genre
                  .music_genre_name
              }
            </li>

            <div className="list-group-item">
              <strong>{tracks.explicit === 0 ? "No" : "Yes"}</strong>
            </div>
            <div className="list-group-item">
              <strong>Release Date: </strong>
              <Moment format="DD/MM/YYYY">{tracks.updated_time}</Moment>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Lyrics;
