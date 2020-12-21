import {createRef, useEffect} from "react";

export default function Audio({filePath, play, loop}) {
    const audioElementRef = createRef();

    const audioElement = (
        <audio 
            style={{position: "absolute"}}
            type="audio/mp3"
            src={filePath}
            ref={audioElementRef}
            loop={loop === undefined ? false : true}
        ></audio>
    );

    useEffect(()=> {
        if (play) {
            audioElementRef.current.currentTime = 0;
            audioElementRef.current.play();
        }
    },[play]);

    return audioElement;
};