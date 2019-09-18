import React from "react";
import { MusicConsumer } from "../context";
import Spinner from "../layouts/Spinner";
import Track from "./Track";

const Tracks = () => {
  return (
    <MusicConsumer>
      {value => {
        const { track_list, heading } = value;
        if (track_list === undefined || track_list.length === 0) {
          return <Spinner />;
        } else {
          return (
            <React.Fragment>
              <h3 className="text-center mb-4">{heading}</h3>
              <div className="row">
                {track_list.map(item => (
                  <Track track={item.track} key={item.track.track_id} />
                ))}
              </div>
            </React.Fragment>
          );
        }
      }}
    </MusicConsumer>
  );
};

export default Tracks;
