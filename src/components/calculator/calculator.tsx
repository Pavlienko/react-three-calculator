import React, { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PresentationControls,
  Stage,
  ContactShadows,
  Environment,
  Shadow
} from "@react-three/drei";

import "./calculator.css";

import CalculatorBaseModel from "../calculator-base-model";
import CalculatorBoxGeo from "../calculator-box-geo";

export default function Calculator() {
  const ref = useRef<any>(null!);
  return (
    <div className="canvas-calc">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 90 }}>
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
              color="blue"
              colorStop={0}
              opacity={0.3}
              fog={false}
            />
            <CalculatorBaseModel />
            <CalculatorBoxGeo position={[0.5, 1.35, 0.55]} />
            <CalculatorBoxGeo position={[0.5, 1.35, 1.65]} />
            <CalculatorBoxGeo position={[0.5, 1.35, -0.55]} />
            <CalculatorBoxGeo position={[0.5, 1.35, -1.65]} />
            <CalculatorBoxGeo position={[0.5, 0.35, 0.55]} />
            <CalculatorBoxGeo position={[0.5, 0.35, 1.65]} />
            <CalculatorBoxGeo position={[0.5, 0.35, -0.55]} />
            <CalculatorBoxGeo position={[0.5, 0.35, -1.65]} />
            <CalculatorBoxGeo position={[0.5, -0.65, 0.55]} />
            <CalculatorBoxGeo position={[0.5, -0.65, 1.65]} />
            <CalculatorBoxGeo position={[0.5, -0.65, -0.55]} />
            <CalculatorBoxGeo position={[0.5, -0.65, -1.65]} />
            <CalculatorBoxGeo position={[0.5, -1.65, 0.55]} />
            <CalculatorBoxGeo position={[0.5, -1.65, 1.65]} />
            <CalculatorBoxGeo position={[0.5, -1.65, -0.55]} />
            <CalculatorBoxGeo position={[0.5, -1.65, -1.65]} />
            <CalculatorBoxGeo position={[0.5, -2.65, 1.1]} />
            <CalculatorBoxGeo position={[0.5, -2.65, -0.55]} />
            <CalculatorBoxGeo position={[0.5, -2.65, -1.65]} />
          </PresentationControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
