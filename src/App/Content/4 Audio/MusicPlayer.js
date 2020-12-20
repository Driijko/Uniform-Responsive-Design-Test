import music from "../5 Assets/audio/music/music.mp3";

export default function MusicPlayer(props) {
    console.log("play!");
    return (
        <audio autoPlay loop>
            <source src={music} type="audio/mp3" />
        </audio>
    );
};