import { useState, useEffect } from "react";
import Calculator from "../calculator";

const App: React.FC = () => {
  const [sign, setSign] = useState("CALC");

  let a: number, b: number;

  useEffect(() => {
    console.log("wow");
    console.log(Number('123+'));
    
  }, [sign]);

  function calculate(value:[]){
    value.map((e:string)=>{
      console.log(e);
      
    })
  }

  function handleChange(value: string) {
    switch (value) {
      case "+":
        a = Number(sign);
        console.log(a);

        setSign(sign + value);
        break;
      case "AC":
        setSign("CALC");
        break;
      case "=":
        setSign("");
        break;
      default:
        switch (sign) {
          case "CALC":
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
      <Calculator sign={sign} onChange={handleChange} />
    </div>
  );
};

export default App;
