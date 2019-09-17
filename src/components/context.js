import React, { Component } from "react";
import axios from "axios";

const MusicContext = React.createContext();

export class MusicProvider extends Component {
  state = {
    track_list: [],
    heading: "Top 10 Tracks",
    apiURL: "https://api.musixmatch.com/ws/1.1/",
    apiKey: "d73f61ebc30a9ca47af521ec4c8bb5c8"
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/${this.state.apiURL}chart.tracks.get?chart_name=top&page=1&page_size=10&country=gh&f_has_lyrics=1&apikey=${this.state.apiKey}`
      )
      .then(res => {
        // console.log(res.data);
        this.setState({ track_list: res.data.message.body.track_list });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { children } = this.props;
    return (
      <MusicContext.Provider value={this.state}>
        {children}
      </MusicContext.Provider>
    );
  }
}

export const MusicConsumer = MusicContext.Consumer;
