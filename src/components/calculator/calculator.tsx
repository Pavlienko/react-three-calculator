import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PresentationControls, Environment, Shadow } from "@react-three/drei";
import { useContextBridge } from "@react-three/drei";
import { ReactReduxContext, useSelector } from "react-redux";
import { RootState } from "../../store/store";

import "./calculator.css";

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
  const ContextBridge = useContextBridge(ReactReduxContext);

  const signs = useSelector((state: RootState) => state.signs.value);

  const colors: Colors = {
    shadow: "#404040",
    defaultButton: "darkgrey",
    extendButton: "#888",
    operationButton: "darkorange",
    equalButton: "orangered",
    display: "lightgreen",
  };

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
              <ambientLight intensity={0.5} />
              <spotLight
                position={[10, 10, 10]}
                angle={0.25}
                penumbra={1}
                shadow-mapSize={[512, 512]}
                castShadow
              />
              <Environment preset="forest" />
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
                text={signs}
                position={[0.5, 2.5, 0]}
                scale={[0.2, 1.1, 4.3]}
                color={colors.display}
              />
              <CalculatorBoxGeo
                position={[0.5, 1.35, 1.65]}
                color={colors.extendButton}
                text="AC"
              />
              <CalculatorBoxGeo
                position={[0.5, 1.35, 0.55]}
                color={colors.extendButton}
                text="#"
              />
              <CalculatorBoxGeo
                position={[0.5, 1.35, -0.55]}
                color={colors.extendButton}
                text="%"
              />
              <CalculatorBoxGeo
                position={[0.5, 1.35, -1.65]}
                color={colors.operationButton}
                text="/"
              />
              <CalculatorBoxGeo
                position={[0.5, 0.35, -1.65]}
                color={colors.operationButton}
                text="*"
              />
              <CalculatorBoxGeo
                position={[0.5, -0.65, -1.65]}
                color={colors.operationButton}
                text="-"
              />
              <CalculatorBoxGeo
                position={[0.5, -1.65, -1.65]}
                color={colors.operationButton}
                text="+"
              />
              <CalculatorBoxGeo position={[0.5, -1.65, 1.65]} text="1" />
              <CalculatorBoxGeo position={[0.5, -1.65, 0.55]} text="2" />
              <CalculatorBoxGeo position={[0.5, -1.65, -0.55]} text="3" />
              <CalculatorBoxGeo position={[0.5, -0.65, 1.65]} text="4" />
              <CalculatorBoxGeo position={[0.5, -0.65, 0.55]} text="5" />
              <CalculatorBoxGeo position={[0.5, -0.65, -0.55]} text="6" />
              <CalculatorBoxGeo position={[0.5, 0.35, 1.65]} text="7" />
              <CalculatorBoxGeo position={[0.5, 0.35, 0.55]} text="8" />
              <CalculatorBoxGeo position={[0.5, 0.35, -0.55]} text="9" />
              <CalculatorBoxGeo
                position={[0.5, -2.65, 1.1]}
                scale={[0.2, 1, 2.2]}
                text="0"
              />
              <CalculatorBoxGeo position={[0.5, -2.65, -0.55]} text="." />
              <CalculatorBoxGeo
                sign={signs}
                position={[0.5, -2.65, -1.65]}
                color={colors.equalButton}
                text="="
              />
            </PresentationControls>
          </Suspense>
        </ContextBridge>
      </Canvas>
    </div>
  );
};

export default Calculator;
