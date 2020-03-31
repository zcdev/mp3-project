import React, { Component } from "react";

import Wrapper from "./components/Wrapper";
import Songs from "./Playlist.json";
const music = new Audio('songs/fly.mp3', 'songs/closer.mp3', 'songs/it-will-never-end.mp3', 'songs/alone.mp3', 'songs/open-door', 'music/hello.mp3');
music.preload = 'auto';
class App extends Component {

    constructor() {
        super()
        this.interval = null;
        this.state = {
            Songs,
            isPlaying: false,
            isPaused: true,
            currentTime: 0,
            timestamp: 0,
            duration: 0,
            progress: 0,
            clicked: [],
            id: []
        };

        music.addEventListener("canplaythrough", () => {
            this.setState({
                duration: music.duration
            });
        });
    }

    playSong = id => {
        let currentTime = music.currentTime.toFixed(2);
        music.src = Songs[id].song;

        music.addEventListener(
            "timeupdate", () => {
                this.setState({
                    currentTime: currentTime
                })
            });

        if (!this.state.isPlaying) {

            this.state.clicked[0] = Songs[id].id;
            let array = this.state.id;
            let prev = array.slice(-2)[0];
            array.push(this.state.clicked[0]);

            if (prev === id) {
                music.currentTime = this.state.currentTime;
            }

            music.play();

            this.interval = setInterval(() => {
                this.setState({
                    currentTime: this.state.currentTime,
                    clicked: this.state.clicked.concat(id),
                    isPlaying: true,
                    progress: Math.ceil((music.currentTime / music.duration) * 100) / 100
                });
            }, 100);

        } else {
            this.setState({
                clicked: [],
                isPlaying: false
            });


            music.pause();
            clearInterval(this.interval);

        }
    };

    clickedButton = id => {
      let spin;
        if (music.currentTime === music.duration) {
            return spin = "";
        }
        if (this.state.clicked[0] === Songs[id].id || !this.state.clicked[0] === undefined) {
            return spin = "spin";
        } else {
            return spin = "";
        }
    };

    applyStyle = id => {
        let transform = { transform: `scaleX(${this.state.progress})` }
        if (this.state.clicked[0] === Songs[id].id) {
            return transform
        }
    };

    render() {
        return (
            <Wrapper>
                {this.state.Songs.map((song, id) => (
                  <div className="card" onClick={() => this.playSong(id)} id={song.id} key={song.id}>
                    <div className="container">
                      <img className="photo" src={song.image} alt={song.title} title={song.title} />
                      <div className="button"><img className={this.clickedButton(id)} src="./images/play-pause.png" alt="play/pause"/><span>{song.title}</span>
                      <div style={this.applyStyle(id)} id="progress-bar" />
                      </div>
                    </div>
                </div>
                ))}
            </Wrapper>
        );
    }
}

export default App;