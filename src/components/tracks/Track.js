import React from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaCompactDisc, FaChevronRight } from "react-icons/fa";

const Track = props => {
  const { track } = props;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <div className="card-text">
            <p>
              <strong>
                <FaPlay /> Track
              </strong>
              : {track.track_name}
            </p>
          </div>

          <div className="card-text">
            <p>
              <strong>
                <FaCompactDisc /> Album
              </strong>
              : {track.album_name}
            </p>
          </div>

          <Link
            to={`/lyrics/track/${track.track_id}`}
            className="btn btn-dark btn-sm"
          >
            <FaChevronRight />
            View Track
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
