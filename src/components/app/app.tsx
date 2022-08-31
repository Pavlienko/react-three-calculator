import axios from "axios";
import { useState, useEffect } from "react";
import Calculator from "../calculator";
import History from "../history";

const App: React.FC = () => {
  const [sign, setSign] = useState("CALCULATOR");

  useEffect(() => {
  }, [sign]);

  const Calculate = () => {
    axios
      .post("http://62.113.105.69:3000/threecalchistory", {
        datetime: new Date().toLocaleString(),
        operation: sign + " = " + eval(sign),
      })
      .then((Response) => {
        setSign(eval(sign));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleChange(value: string) {
    switch (value) {
      case "+":
        setSign(sign + value);
        break;
      case "AC":
        setSign("CALCULATOR");
        break;
      case "=":
        Calculate();
        break;
      default:
        switch (sign) {
          case "CALCULATOR":
            setSign(value);
            break;
          default:
            setSign(sign + value);
        }
    }
  }

  return (
    <div>
      <h1 style={{ userSelect: "none" }}>{sign}</h1>
      <History sign={sign} />
      <Calculator sign={sign} onChange={handleChange} />
    </div>
  );
};

export default App;
