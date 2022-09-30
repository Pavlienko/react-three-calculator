import Scene from "../scene";
import History from "../history";
import Music from "../music";
import Infographics from "../infographics";

import "../app/app.css";

import calcLogo from "../../assets/logo.png";


const App: React.FC = () => {

  return (
    <div>
      <div className="calc-logo">
        <img src={calcLogo} alt="calc-logo" />
      </div>
      <Music />
      <History />
      <Scene />
      <Infographics />
    </div>
  );
};

export default App;
