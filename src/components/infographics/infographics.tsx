// import { useEffect, useState } from "react";

//CSS
import "./infographics.css";

import gif from "../../assets/gif.webp";

const Infographics: React.FC = () => {
//   const [mouse, setMouse] = useState([0, 0]);

  //   useEffect(() => {
  //       window.addEventListener(
  //         "mousemove",
  //         (e) => {
  //           setMouse([e.x, e.y]);
  //         },
  //         false
  //       );
  // }, [mouse]);

  return (
    <div className="infos-wrapper">
      <div style={{ marginTop: "30px" }}>INFORMATION:</div>
      <div style={{ width: "fit-content", margin: "30px auto" }}></div>

      <div className="infos-block">
        AUTHOR: NIKITA PAVLIENKO <br />
        <br />
        <a
          href="mailto:hello@pavlienko.com"
          target="_blank"
          rel="noreferrer"
          className="contacts-page-text"
          style={{ color: "pink" }}
        >
          hello@pavlienko.com
        </a>
        <br />
        <br />
        <a
          href="https://www.pavlienko.com"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "underline", color: "lightblue" }}
        >
          WEBSITE: PAVLIENKO.COM
        </a>{" "}
        <br />
        <br />
        <a
          href="https://storage.yandexcloud.net/pavlienko-com-2022/information/NikitaPavlienkoResume.pdf"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "underline", color: "lightgreen" }}
        >
          CV
        </a>{" "}
        <br />
        <br />
        <a
          href="https://t.me/pavlienko"
          target="_blank"
          rel="noreferrer"
          className="contacts-page-text"
          style={{ color: "#43f" }}
        >
          telegram: @pavlienko
        </a>{" "}
        <br />
        <br />
        {/* <br />
        MOUSE POSITION X:{mouse[0]} <br />
        MOUSE POSITION Y:{mouse[1]} <br />
        <br /> */}
        BASE: REACT_TYPESCRIPT <br />
        3D: REACT_THREE_FIBER <br />
        <br />
        HTTP: AXIOS <br />
        DB: MYSQL <br />
        ORM: SEQUILIZE <br />
        STATEMANAGEMENT: REDUX_TOOLKIT <br />
        HISTORY: SERVERSIDE <br />
        <br />
        <img src={gif} alt="chicks" width={200}/>
        {/* PERFOMANCE: {Math.floor(performance.now())} <br /> */}
      </div>
    </div>
  );
};

export default Infographics;
