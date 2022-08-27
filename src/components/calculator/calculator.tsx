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

type Sign = {
  sign: string,
  onChange: any
}

export default function Calculator(props:Sign) {
  // const ref = useRef<any>(null!);
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
            <CalculatorBoxGeo position={[0.5, 1.35, 1.65]} text="AC" sign={props.sign} onChange={props.onChange}/>
            <CalculatorBoxGeo position={[0.5, 1.35, 0.55]} text="#" sign={props.sign} onChange={props.onChange}/>
            <CalculatorBoxGeo position={[0.5, 1.35, -0.55]} text="%"/>
            <CalculatorBoxGeo position={[0.5, 1.35, -1.65]} text="/"/>
            <CalculatorBoxGeo position={[0.5, 0.35, 1.65]} text="7"/>
            <CalculatorBoxGeo position={[0.5, 0.35, 0.55]} text="8"/>
            <CalculatorBoxGeo position={[0.5, 0.35, -0.55]} text="9"/>
            <CalculatorBoxGeo position={[0.5, 0.35, -1.65]} text="*"/>
            <CalculatorBoxGeo position={[0.5, -0.65, 1.65]} text="4"/>
            <CalculatorBoxGeo position={[0.5, -0.65, 0.55]} text="5"/>
            <CalculatorBoxGeo position={[0.5, -0.65, -0.55]} text="6"/>
            <CalculatorBoxGeo position={[0.5, -0.65, -1.65]} text="-"/>
            <CalculatorBoxGeo position={[0.5, -1.65, 1.65]} text="1"/>
            <CalculatorBoxGeo position={[0.5, -1.65, 0.55]} text="2"/>
            <CalculatorBoxGeo position={[0.5, -1.65, -0.55]} text="3"/>
            <CalculatorBoxGeo position={[0.5, -1.65, -1.65]} text="+"/>
            <CalculatorBoxGeo position={[0.5, -2.65, 1.1]} text="0"/>
            <CalculatorBoxGeo position={[0.5, -2.65, -0.55]} text="."/>
            <CalculatorBoxGeo position={[0.5, -2.65, -1.65]} text="="/>
          </PresentationControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
