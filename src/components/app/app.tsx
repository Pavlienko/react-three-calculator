import Calculator from "../calculator";
import History from "../history";
import Music from "../music";

import "../app/app.css";

import calcLogo from "../../assets/logoq.png";


const App: React.FC = () => {

  return (
    <div>
      <div className="calc-logo">
        <img src={calcLogo} alt="calc-logo" />
      </div>
      <Music />
      <History />
      <Calculator />
    </div>
  );
};

export default App;
