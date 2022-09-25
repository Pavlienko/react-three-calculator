import { useState, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import CalculatorBaseModel from "../calculator-base-model";
import CalculatorBoxGeo from "../calculator-box-geo";

import { colors, buttons } from "../../store/parameters";

const Scene: React.FC = () => {
  const ref = useRef<THREE.Group>(null!);
  const signs = useSelector((state: RootState) => state.signs);

  const [counterX, setCounterX] = useState<number>(window.innerWidth / 2);
  const [counterY, setCounterY] = useState<number>(window.innerHeight / 2);

  useEffect(() => {
    const setFromEvent = (e: any) => {
      setCounterX(e.clientX);
      setCounterY(e.clientY);
    };
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  useFrame(() => {
    if (ref.current) {
      const y =
        (counterX / window.innerWidth - 0.5 - ref.current.rotation.y) * 0.1;
      const z =
        (-(counterY / window.innerHeight - 0.5) - ref.current.rotation.z) * 0.1;
      console.log(y);

      if (y < -0.001 || y > 0.001) {
        ref.current.rotation.y += y;
        ref.current.rotation.z += z;
      }
    }
  });

  return (
    <group ref={ref}>
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
