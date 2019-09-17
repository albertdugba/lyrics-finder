import React, { Component } from "react";
import axios from "axios";

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
      .then(res => console.log(res.data))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <h1>Lyrics Page</h1>
      </div>
    );
  }
}

export default Lyrics;
