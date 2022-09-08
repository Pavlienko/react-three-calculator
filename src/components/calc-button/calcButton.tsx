import * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
type GLTFResult = GLTF & {
  nodes: {
    ["calc-button"]: THREE.Mesh;
  };
  materials: {
    buttonsMaterial: THREE.MeshStandardMaterial;
  };
};

export default function CalcButton(props: JSX.IntrinsicElements["group"]) {
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
        />
      </group>
    </group>
  );
}
useGLTF.preload("/calc-test.gltf");
