import * as THREE from "three";
import React, { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    ["calculator-base"]: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
  };
};

export default function CalculatorBaseModel(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null!);
  const { nodes, materials } = useGLTF(
    "/calculator-base.glb"
  ) as unknown as GLTFResult;

  // const [hovered, hover] = useState(false);
  // const [clicked, click] = useState(false);

  // useFrame((state, delta) => {
  //   group.current.rotation.y += 0.01;
  // });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          // scale={clicked ? 1.5 : 1}
          // onClick={(event) => click(!clicked)}
          // onPointerOver={(event) => {
          //   hover(true);
          // }}
          // onPointerOut={(event) => {
          //   hover(false);
          // }}
          name="calculator-base"
          castShadow
          receiveShadow
          geometry={nodes["calculator-base"].geometry}
          material={materials.Material}
          userData={{ name: "calculator-base" }}
        >
          {/* <meshStandardMaterial color={hovered ? "hotpink" : "orange"} /> */}
          <meshStandardMaterial color={"lightgray"} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/calculator-base.glb");
