import { useEffect, useState } from "react";

//CSS
import "./infographics.css"

const Infographics: React.FC = () => {
  const [mouse, setMouse] = useState([0, 0]);

  useEffect(() => {
      window.addEventListener(
        "mousemove",
        (e) => {
          setMouse([e.x, e.y]);
        },
        false
      );
}, [mouse]);

  return (
    <div className="infos-wrapper">
      <div className="infos-mouse">
        X:{mouse[0]}  <br />
        Y:{mouse[1]}
      </div>
    </div>
  );
};

export default Infographics;
