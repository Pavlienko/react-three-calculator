import * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import {MeshProps} from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    ["calc-button"]: THREE.Mesh;
  };
  materials: {
    buttonsMaterial: THREE.MeshStandardMaterial;
  };
} & MeshProps;

type ButtonProps = {
  color?: string
} 

export default function CalcButton(props: ButtonProps) {
  const group = useRef<THREE.Group>(null!);
  const { nodes, materials } = useGLTF(
    "/calc-button.gltf"
  ) as unknown as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="calc-button-element">
        <mesh
          geometry={nodes["calc-button"].geometry}
          material={materials.buttonsMaterial}
        >
          <meshStandardMaterial color={props.color? props.color : "#808080"}/>
        </mesh>
      </group>
    </group>
  );
}
useGLTF.preload("/calc-button.gltf");
