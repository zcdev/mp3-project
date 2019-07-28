import React, { Component } from "react";

import Wrapper from "./components/Wrapper";
import Songs from "./Playlist.json";
const music = new Audio('songs/fly.mp3','songs/closer.mp3', 'songs/it-will-never-end.mp3', 'songs/alone.mp3','songs/open-door', 'music/hello.mp3');
let currentTime;
let duration;


class App extends Component {

  state = {
    Songs,
    selected: {}
  };

  playSong = id => {

    let selected = this.state.selected;
    selected[id] = !selected[id];
    this.setState({selected: selected});
    music.src = Songs[id].song;

    music.onloadedmetadata = () => {
      duration = music.duration.toFixed(2);
    };

    let getSongLength = () => {
      currentTime = music.currentTime.toFixed(2);
      // console.log("duration: " + duration);
      // console.log("currentTime: " + currentTime);
      if (currentTime === duration) {
        this.setState({selected: !selected});
      } 
    }
 
    music.addEventListener("timeupdate", getSongLength);
 
    if (this.state.selected[id]) {
      music.play()
    } else {
      music.pause();     
    }

  };

  render() {
    return (
      <Wrapper>
        {this.state.Songs.map((song, id) => (
          <div className="card" onClick={() => this.playSong(id)} id={song.id} key={song.id}>
            <div className="container">
              <img className="photo" src={song.image} alt={song.title} title={song.title} />
              <div className="button"><img className={this.state.selected[id] ? "spin": ""} src="./images/play-pause.png" alt="play/pause"/><span>{song.title}</span></div>
            </div>
        </div>
        ))}
      </Wrapper>
    );
  }
}

export default App;
