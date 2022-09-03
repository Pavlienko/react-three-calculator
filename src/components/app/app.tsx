import axios from "axios";
import { useState, useEffect } from "react";
import Calculator from "../calculator";
import History from "../history";

import "../app/app.css"

import calcLogo from "../../assets/logo.png"
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const App: React.FC = () => {

const signs = useSelector((state: RootState)=> state.signs.value)

  // const [sign, setSign] = useState("3D CALCULATOR");

  // useEffect(() => {}, [sign]);

  // const Calculate = () => {
  //   axios
  //     .post("http://62.113.105.69:3000/threecalchistory", {
  //       datetime: new Date().toLocaleString(),
  //       operation: sign + " = " + (eval(sign).toFixed(3)),
  //     })
  //     .then((Response) => {
  //       setSign(eval(sign).toFixed(3));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // function handleChange(value: string) {
  //   switch (value) {
  //     case "+":
  //       setSign(sign + value);
  //       break;
  //     case "AC":
  //       setSign("3D CALCULATOR");
  //       break;
  //     case "=":
  //       Calculate();
  //       break;
  //     default:
  //       switch (sign) {
  //         case "3D CALCULATOR":
  //           setSign(value);
  //           break;
  //         default:
  //           setSign(sign + value);
  //       }
  //   }
  // }

  return (
    <div>
      <h1 style={{ userSelect: "none" }}>
        {signs}
      </h1>
      <div className="calc-logo">
        <img src={calcLogo} alt="calc-logo" />
      </div>
      <History signs={signs}/>
      <Calculator />
    </div>
  );
};

export default App;
