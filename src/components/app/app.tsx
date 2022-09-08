import Calculator from "../calculator";
import History from "../history";

import "../app/app.css";

import calcLogo from "../../assets/logo.png";
import music from "../../assets/music.mp3"

const App: React.FC = () => {

  return (
    <div>
      <div className="calc-logo">
        <img src={calcLogo} alt="calc-logo" />
      </div>
      <audio autoPlay loop src={music}></audio>
      <History />
      <Calculator />
    </div>
  );
};

export default App;
