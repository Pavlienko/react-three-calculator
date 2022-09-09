import music from "../../assets/music.mp3";
import { useEffect, useState, useRef } from "react";

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
      style={{
        width: "fit-content",
        height: "100px",
        background: "black",
        position: "absolute",
        right: "0",
        zIndex: "9999",
      }}
    >
      <h1>sound</h1>
    </div>
  );
};

export default Music;
