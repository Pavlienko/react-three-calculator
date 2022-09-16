import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  PresentationControls,
  Environment,
  Shadow,
  useContextBridge,
} from "@react-three/drei";
import { ReactReduxContext } from "react-redux";

import "./calculator.css";

import { colors } from "../../store/parameters";
import Scene from "../scene";
import Background from "../background";

const Calculator: React.FC = () => {
  const ContextBridge = useContextBridge(ReactReduxContext);

  return (
    <div className="canvas-calc">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 90 }}>
        <ContextBridge>
          <Suspense fallback={null}>
            <PresentationControls
              global
              config={{ mass: 1, tension: 500 }}
              snap={true}
              rotation={[0, -Math.PI / 2, 0]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 2]}
            >
              <ambientLight intensity={0.5} color={"#9af"} />
              <spotLight
                color={"#fda"}
                // color={"#f0a"}
                position={[10, 10, 10]}
                angle={0.25}
                penumbra={1}
                shadow-mapSize={[512, 512]}
                castShadow
              />
              <spotLight
                color={"#fda"}
                // color={"#0fd"}
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
              <Scene />
            </PresentationControls>
          </Suspense>
        </ContextBridge>
        <Background />
      </Canvas>
    </div>
  );
};

export default Calculator;
