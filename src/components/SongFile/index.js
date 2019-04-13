import React from "react";
import "./style.css";

function SongFile(props) {
  return (
    <div className="card" onClick={() => props.playSong(props.id)} >
      <div className="img-container">
        <img className="photo" src={props.image} alt={props.title} title={props.title} />
        <div><img className="button" src="./images/play-pause.png" alt="play/pause"/><span>{props.title}</span></div>
      </div>
    </div>
  );
}

export default SongFile;