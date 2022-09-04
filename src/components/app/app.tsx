import Calculator from "../calculator";
import History from "../history";

import "../app/app.css";

import calcLogo from "../../assets/logo.png";

const App: React.FC = () => {

  return (
    <div>
      <div className="calc-logo">
        <img src={calcLogo} alt="calc-logo" />
      </div>
      <History />
      <Calculator />
    </div>
  );
};

export default App;
