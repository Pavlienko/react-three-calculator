
import React ,{ useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

import "./calculator.css";

import CalculatorBaseModel from "../calculator-base-model";

export default function Calculator()  {
  const ref = useRef<any>(null!)
  return (
    <div className="canvas-calc">
    <Canvas>
      <Suspense fallback={null}>
        <Stage
          controls={ref}
          preset="rembrandt"
          intensity={1}
          environment="city"
        >
          <CalculatorBaseModel />
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} />
    </Canvas>
    </div>
  );
};