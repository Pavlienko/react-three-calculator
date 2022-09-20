import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import CalculatorBaseModel from "../calculator-base-model";
import CalculatorBoxGeo from "../calculator-box-geo";

import { colors, buttons } from "../../store/parameters";

const Scene: React.FC = () => {
  const ref = useRef<THREE.Group>(null!);
  const signs = useSelector((state: RootState) => state.signs);

  const [counterX, setCounterX] = useState<number>(0);
  const [counterY, setCounterY] = useState<number>(0);

  window.addEventListener(
    "mousemove",
    (e) => {
      setCounterX(e.x);
      setCounterY(e.y);
    },
    false
  );

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y +=
        (counterX / window.innerWidth - 0.5 - ref.current.rotation.y) * 0.1;
      ref.current.rotation.z +=
        (-(counterY / window.innerHeight - 0.5) - ref.current.rotation.z) * 0.1;
    }
  });

  return (
      <group ref={ref} >
        <CalculatorBaseModel />
        <CalculatorBoxGeo
          key={"display"}
          text={signs.resultSign}
          position={[1.05, 1.2, 0]}
          color={colors.display}
        />
        {buttons.map((e, i) => {
          return (
            <CalculatorBoxGeo
              key={i}
              text={e.text}
              position={[e.position[0], e.position[1], e.position[2]]}
              color={e.color ? e.color : undefined}
            />
          );
        })}
        <CalculatorBoxGeo
          key={"count"}
          sign={signs}
          text={"="}
          position={[1.07, -2.55, -1.43]}
          color={colors.equalButton}
        />
      </group>
  );
};

export default Scene;
