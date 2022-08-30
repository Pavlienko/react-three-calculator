import * as THREE from "three";
import { useRef } from "react";
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

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="calculator-base"
          castShadow
          receiveShadow
          geometry={nodes["calculator-base"].geometry}
          material={materials.Material}
          userData={{ name: "calculator-base" }}
        >
          <meshStandardMaterial color={"lightgrey"} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/calculator-base.glb");
