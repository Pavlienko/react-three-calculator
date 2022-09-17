import music from "../../assets/music.mp3";
import { useEffect, useState, useRef } from "react";

import "./music.css";

import audioOn from "../../assets/audioon.svg";
import audioOff from "../../assets/audiooff.svg";

const Music: React.FC = () => {
  const [status, setStatus] = useState<Boolean>(false);

  const audio = useRef(new Audio(music) as HTMLMediaElement);
  audio.current.volume = 0.1;

  useEffect(() => {
    status ? audio.current.play() : audio.current.pause();
  }, [status, audio]);

  return (
    <div
      className="app-music"
      onClick={() => setStatus((status) => !status)}
    >
      <img
        src={status ? audioOn : audioOff}
        alt="audio-button"
        className="app-musicbutton"
      />
    </div>
  );
};

export default Music;
