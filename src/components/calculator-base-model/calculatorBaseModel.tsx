import * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    ["calculator-base"]: THREE.Mesh;
    ["calculator-base_1"]: THREE.Mesh;
    ["calculator-base_2"]: THREE.Mesh;
    ["calculator-base_3"]: THREE.Mesh;
    ["calculator-base_4"]: THREE.Mesh;
    ["calculator-base_5"]: THREE.Mesh;
  };
  materials: {
    baseMaterial: THREE.MeshStandardMaterial;
    buttonsBaseMaterial: THREE.MeshStandardMaterial;
    displayMaterial: THREE.MeshStandardMaterial;
    signMaterial: THREE.MeshStandardMaterial;
    dropMaterial: THREE.MeshStandardMaterial;
    dropButtonMaterial: THREE.MeshStandardMaterial;
  };
};

export default function CalculatorBaseModel(
  props: JSX.IntrinsicElements["group"]
) {
  const group = useRef<THREE.Group>(null!);
  const { nodes, materials } = useGLTF(
    "/calc-base.gltf"
  ) as unknown as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="calculator-base"
          castShadow
          receiveShadow
          geometry={nodes["calculator-base"].geometry}
          material={materials.baseMaterial}
          userData={{ name: "calculator-base" }}
        >
          <meshStandardMaterial color={"#C9B27F"} />
        </mesh>
      <mesh geometry={nodes['calculator-base_1'].geometry} material={materials.buttonsBaseMaterial} />
      <mesh geometry={nodes['calculator-base_2'].geometry} material={materials.displayMaterial} />
      <mesh geometry={nodes['calculator-base_3'].geometry} material={materials.signMaterial} />
      <mesh geometry={nodes['calculator-base_4'].geometry} material={materials.dropMaterial} />
      <mesh geometry={nodes['calculator-base_5'].geometry} material={materials.dropButtonMaterial} />
      </group>
    </group>
  );
}
useGLTF.preload("/calc-base.gltf");
