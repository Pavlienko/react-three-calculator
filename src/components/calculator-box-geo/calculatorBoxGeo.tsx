import * as THREE from "three";
import * as React from "react";
import { useRef, useState } from "react";

export default function CalculatorButtonZero(props: JSX.IntrinsicElements["mesh"]) {
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
      scale={[clicked ? 1.9 : 1, 1, 1]}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[0.2, 1, 1.1]} />
      <meshStandardMaterial color={hovered ? "red" : "blue"} />
    </mesh>
  );
}
