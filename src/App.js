import React, { Component } from "react";
import SongFile from "./components/SongFile";
import Wrapper from "./components/Wrapper";
import Songs from "./Playlist.json";
const music = new Audio('songs/fly.mp3','songs/closer.mp3', 'songs/it-will-never-end.mp3', 'songs/alone.mp3','songs/open-door', 'music/hello.mp3');

class App extends Component {

  state = {
    Songs,
    Clicked: []
  };

  playSong = id => {

  music.src = Songs[id-1].song;

    if (this.state.Clicked.includes(id)) {

      this.setState({
        Clicked: []
      });

      music.pause();

    } else {
      
      this.setState({
        Clicked: this.state.Clicked.concat(id)
      });

      music.play();
    }
  };

  render() {
    return (
      <Wrapper>
        {this.state.Songs.map(song => (
          <SongFile
            playSong={this.playSong}
            id={song.id}
            key={song.id}
            image={song.image}
            title={song.title}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
