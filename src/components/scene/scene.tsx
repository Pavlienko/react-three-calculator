import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  PresentationControls,
  Environment,
  // Shadow,
  useContextBridge,
} from "@react-three/drei";
import { ReactReduxContext } from "react-redux";

import "./scene.css";

// import { colors } from "../../store/parameters";
import Calculator from "../calculator";
import Background from "../background";

const Scene: React.FC = () => {
  const ContextBridge = useContextBridge(ReactReduxContext);

  return (
    <div className="canvas-scene">
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
                intensity={2}
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
              {/* <Shadow
                scale={7}
                position-y={-3.7}
                color={colors.shadow}
                colorStop={0}
                opacity={0.3}
                fog={false}
              /> */}
              <Calculator />
            </PresentationControls>
          </Suspense>
        </ContextBridge>
        <Background />
      </Canvas>
    </div>
  );
};

export default Scene;
