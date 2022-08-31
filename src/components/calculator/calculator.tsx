import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PresentationControls, Environment, Shadow } from "@react-three/drei";

import "./calculator.css";

import CalculatorBaseModel from "../calculator-base-model";
import CalculatorBoxGeo from "../calculator-box-geo";

type Sign = {
  sign: string;
  onChange: any;
};

export default function Calculator(props: Sign) {
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
              color="rgb(15,15,15)"
              colorStop={0}
              opacity={0.3}
              fog={false}
            />
            <CalculatorBaseModel />
            <CalculatorBoxGeo
              text={props.sign}
              position={[0.5, 2.5, 0]}
              scale={[0.2, 1.1, 4.3]}
              color={"lightgreen"}
            />
            <CalculatorBoxGeo
              position={[0.5, 1.35, 1.65]}
              color={"#808080"}
              text="AC"
              // sign={props.sign}
              onChange={props.onChange}
            />
            <CalculatorBoxGeo
              position={[0.5, 1.35, 0.55]}
              color={"#808080"}
              text="#"
              // sign={props.sign}
              onChange={props.onChange}
            />
            <CalculatorBoxGeo
              position={[0.5, 1.35, -0.55]}
              color={"#808080"}
              text="%"
              // sign={props.sign}
              onChange={props.onChange}
            />
            <CalculatorBoxGeo
              position={[0.5, 1.35, -1.65]}
              color={"darkorange"}
              text="/"
              // sign={props.sign}
              onChange={props.onChange}
            />
            <CalculatorBoxGeo
              position={[0.5, 0.35, 1.65]}
              text="7"
              // sign={props.sign}
              onChange={props.onChange}
            />
            <CalculatorBoxGeo
              position={[0.5, 0.35, 0.55]}
              text="8"
              // sign={props.sign}
              onChange={props.onChange}
            />
            <CalculatorBoxGeo
              position={[0.5, 0.35, -0.55]}
              text="9"
              // sign={props.sign}
              onChange={props.onChange}
            />
            <CalculatorBoxGeo
              position={[0.5, 0.35, -1.65]}
              color={"darkorange"}
              text="*"
              // sign={props.sign}
              onChange={props.onChange}
            />
            <CalculatorBoxGeo
              position={[0.5, -0.65, 1.65]}
              text="4"
              // sign={props.sign}
              onChange={props.onChange}
            />
            <CalculatorBoxGeo
              position={[0.5, -0.65, 0.55]}
              text="5"
              // sign={props.sign}
              onChange={props.onChange}
            />
            <CalculatorBoxGeo
              position={[0.5, -0.65, -0.55]}
              text="6"
              // sign={props.sign}
              onChange={props.onChange}
            />
            <CalculatorBoxGeo
              position={[0.5, -0.65, -1.65]}
              color={"darkorange"}
              text="-"
              // sign={props.sign}
              onChange={props.onChange}
            />
            <CalculatorBoxGeo
              position={[0.5, -1.65, 1.65]}
              text="1"
              // sign={props.sign}
              onChange={props.onChange}
            />
            <CalculatorBoxGeo
              position={[0.5, -1.65, 0.55]}
              text="2"
              // sign={props.sign}
              onChange={props.onChange}
            />
            <CalculatorBoxGeo
              position={[0.5, -1.65, -0.55]}
              text="3"
              // sign={props.sign}
              onChange={props.onChange}
            />
            <CalculatorBoxGeo
              position={[0.5, -1.65, -1.65]}
              color={"darkorange"}
              text="+"
              // sign={props.sign}
              onChange={props.onChange}
            />
            <CalculatorBoxGeo
              position={[0.5, -2.65, 1.1]}
              scale={[0.2, 1, 2.2]}
              text="0"
              // sign={props.sign}
              onChange={props.onChange}
            />
            <CalculatorBoxGeo
              position={[0.5, -2.65, -0.55]}
              text="."
              // sign={props.sign}
              onChange={props.onChange}
            />
            <CalculatorBoxGeo
              position={[0.5, -2.65, -1.65]}
              color={"orangered"}
              text="="
              // sign={props.sign}
              onChange={props.onChange}
            />
          </PresentationControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
