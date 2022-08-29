import { MeshProps } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useState } from "react";

import "./calculatorBoxGeo.css";

type Buttons = {
  text?: string;
  sign?: string;
  onChange?: any;
} & MeshProps;

export default function CalculatorBoxGeo(props: Buttons) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!);
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  return (
    <mesh
      {...props}
      ref={ref}
      castShadow
      receiveShadow
      scale={[clicked ? 1.4 : 1, 1, 1]}
      onClick={(event) => {
        props.onChange(props.text);
        // click(!clicked);
      }}
      onPointerOver={(event) => {
        click(true);
        hover(true);
      }}
      onPointerOut={(event) => {
        click(false)
        hover(false)}
      } 
    >
      <boxGeometry args={[0.2, 1, props.text === "0" ? 2.2 : 1.1]} />
      <meshStandardMaterial color={hovered ? "red" : "blue"} opacity={0.1} />
      <Html
        transform={true}
        rotation={[0, Math.PI / 2, 0]}
        position={[0.11, 0.35, -0.01]}
        occlude={[ref]}
        className="calc-symbols"
        wrapperClass="calc-symbols-wrapper"
      >
        {props.text}
      </Html>
    </mesh>
  );
}
