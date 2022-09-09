import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PresentationControls, Environment, Shadow} from "@react-three/drei";
import { useContextBridge } from "@react-three/drei";
import { ReactReduxContext, useSelector } from "react-redux";
import { RootState } from "../../store/store";

import "./calculator.css";

// import * as THREE from "three";
// import { useRef} from "react";
import CalculatorBaseModel from "../calculator-base-model";
import CalculatorBoxGeo from "../calculator-box-geo";

type Colors = {
  shadow: string;
  defaultButton: string;
  extendButton: string;
  operationButton: string;
  equalButton: string;
  display: string;
};

const Calculator: React.FC = () => {
  // const ref = useRef<THREE.Group>(null!);
  const ContextBridge = useContextBridge(ReactReduxContext);

  const signs = useSelector((state: RootState) => state.signs.value);

  const colors: Colors = {
    shadow: "#404040",
    defaultButton: "darkgrey",
    extendButton: "red",
    operationButton: "#333",
    equalButton: "orangered",
    display: "lightgreen",
  };

  const buttons = [
    {
      text: "AC",
      position: [0.95, -0.15, -0.715],
      color: colors.extendButton,
    },
    {
      text: "C",
      position: [0.95, -0.15, -1.43],
      color: colors.extendButton,
    },
    {
      text: "%",
      position: [0.98, -0.75, -1.43],
      color: colors.operationButton,
    },
    {
      text: "/",
      position: [0.98, -0.75, -0.715],
      color: colors.operationButton,
    },
    {
      text: "*",
      position: [1.01, -1.35, -0.715],
      color: colors.operationButton,
    },
    {
      text: "MRC",
      position: [1.01, -1.35, -1.43],
      color: colors.operationButton,
    },
    {
      text: "-",
      position: [1.043, -1.95, -0.715],
      color: colors.operationButton,
    },
    {
      text: "M+",
      position: [1.043, -1.95, -1.43],
      color: colors.operationButton,
    },
    {
      text: "+",
      position: [1.07, -2.55, -0.715],
      color: colors.operationButton,
    },
    {
      text: "0",
      position: [1.07, -2.55, 1.43],
    },
    {
      text: "1",
      position: [1.043, -1.95, 1.43],
    },
    {
      text: "2",
      position: [1.043, -1.95, 0.715],
    },
    {
      text: "3",
      position: [1.043, -1.95, 0],
    },
    {
      text: "4",
      position: [1.01, -1.35, 1.43],
    },
    {
      text: "5",
      position: [1.01, -1.35, 0.715],
    },
    {
      text: "6",
      position: [1.01, -1.35, 0],
    },
    {
      text: "7",
      position: [0.98, -0.75, 1.43],
    },
    {
      text: "8",
      position: [0.98, -0.75, 0.715],
    },
    {
      text: "9",
      position: [0.98, -0.75, -0],
    },
    {
      text: ".",
      position: [1.07, -2.55, 0.715],
    },
    {
      text: ".",
      position: [1.07, -2.55, 0],
    },
    {
      sign: signs,
      text: "=",
      position: [1.07, -2.55, -1.43],
      color: colors.equalButton,
    },
  ];

  return (
    <div className="canvas-calc">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 90 }}>
        <ContextBridge>
          <Suspense fallback={null}>
            <PresentationControls
              global
              config={{ mass: 2, tension: 500 }}
              snap={true}
              rotation={[0, -Math.PI / 2, 0]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 2]}
            >
              {/* <ambientLight intensity={0.5} /> */}
              <spotLight
                color={"#fda"}
                position={[10, 10, 10]}
                angle={0.25}
                penumbra={1}
                shadow-mapSize={[512, 512]}
                castShadow
              />
              <spotLight
                color={"#fda"}
                position={[10, 10, 10]}
                angle={0.25}
                penumbra={1}
                shadow-mapSize={[512, 512]}
                castShadow
              />
              <Environment preset="city" />
              <Shadow
                scale={7}
                position-y={-3.7}
                color={colors.shadow}
                colorStop={0}
                opacity={0.3}
                fog={false}
              />
              <CalculatorBaseModel />
              <CalculatorBoxGeo 
              key={'display'}
              text={signs}
              position={[1.05, 1.2, 0]}
              color={colors.display}
              />
              {buttons.map((e, i) => {
                return (
                  <CalculatorBoxGeo
                    key={i}
                    sign={e.sign ? e.sign : undefined}
                    text={e.text}
                    position={[e.position[0], e.position[1], e.position[2]]}
                    color={e.color ? e.color : undefined}
                  />
                );
              })}
            </PresentationControls>
          </Suspense>
        </ContextBridge>
      </Canvas>
    </div>
  );
};

export default Calculator;
