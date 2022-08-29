import { useState, useEffect } from "react";
import Calculator from "../calculator";

const App: React.FC = () => {
  const [sign, setSign] = useState("GLSL");

  useEffect(() => {
    console.log("wow");
  }, [sign]);

  function handleChange(value: string) {
    sign === "GLSL" ? setSign(value) : setSign(sign + value);
  }
  return (
    <div>
      {/* <h1>SUPER ULTRA MEGA CALCULATOR 3D</h1> */}
      <h1 style={{ userSelect: "none" }}>{sign}</h1>
      <Calculator sign={sign} onChange={handleChange} />
    </div>
  );
};

export default App;
