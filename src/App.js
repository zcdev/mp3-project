import React, { Component } from "react";

import Wrapper from "./components/Wrapper";
import Songs from "./Playlist.json";
const music = new Audio('songs/fly.mp3', 'songs/closer.mp3', 'songs/it-will-never-end.mp3', 'songs/alone.mp3', 'songs/open-door', 'music/hello.mp3');
let currentTime;
let duration;
let spin = "";


class App extends Component {

    state = {
        Songs,
        clicked: []
    };

    playSong = id => {

        music.src = Songs[id].song;









        if (this.state.clicked.includes(id)) {

            this.setState({
                clicked: []
            });

        } else {

            this.setState({
                clicked: this.state.clicked.concat(id)
            });

            if (this.state.clicked[0] !== undefined) {
                music.pause();
            } else {
                music.play();
            }
        }

    };


    clickedButton = id => {

        music.onloadedmetadata = () => {
            duration = music.duration.toFixed(2);
        };

        let getSongLength = () => {
            currentTime = music.currentTime.toFixed(2);
            console.log("duration: " + duration);
            console.log("currentTime: " + currentTime);
            if (currentTime === duration) {
                this.setState({
                    clicked: []
                });

            }
        }

        music.addEventListener("timeupdate", getSongLength);

        if (!spin.length) {

            if (this.state.clicked[0] === Songs[id].id || !this.state.clicked[0] === undefined ) {
                return spin = "spin";
            }

        } else {

            if (this.state.clicked[0] === undefined) {
                return spin = "";
            }

        }

    };

    render() {
        return (
            <Wrapper>
        {this.state.Songs.map((song, id) => (
          <div className="card" onClick={() => this.playSong(id)} id={song.id} key={song.id}>
            <div className="container">
              <img className="photo" src={song.image} alt={song.title} title={song.title} />
              <div className="button"><img className={this.clickedButton(id)} src="./images/play-pause.png" alt="play/pause"/><span>{song.title}</span></div>
            </div>
        </div>
        ))}
      </Wrapper>
        );
    }
}

export default App;