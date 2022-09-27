import * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import BaseModel from "../../assets/calc-base-1.gltf";

type GLTFResult = GLTF & {
  nodes: {
    ['calculator-base001']: THREE.Mesh
    ['calculator-base002']: THREE.Mesh
    ['calculator-base003']: THREE.Mesh
    ['calculator-base004']: THREE.Mesh
    ['calculator-base005']: THREE.Mesh
    ['calculator-base006']: THREE.Mesh
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
  props: JSX.IntrinsicElements['group']
) {
  const group = useRef<THREE.Group>(null!);
  const { nodes, materials } = useGLTF(
    // "/calc-base-1.gltf"
    BaseModel
  ) as unknown as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="calculator-base"
          castShadow
          receiveShadow
          geometry={nodes["calculator-base001"].geometry}
          material={materials.baseMaterial}
          userData={{ name: "calculator-base" }}
          rotation={[Math.PI / 2, 0, 0]}
        />
      <mesh geometry={nodes['calculator-base002'].geometry} material={materials.buttonsBaseMaterial} rotation={[Math.PI / 2, 0, 0]}/>
      <mesh geometry={nodes['calculator-base003'].geometry} material={materials.displayMaterial} rotation={[Math.PI / 2, 0, 0]}/>
      <mesh geometry={nodes['calculator-base004'].geometry} material={materials.signMaterial} rotation={[Math.PI / 2, 0, 0]}/>
      <mesh geometry={nodes['calculator-base005'].geometry} material={materials.dropMaterial} rotation={[Math.PI / 2, 0, 0]}/>
      <mesh geometry={nodes['calculator-base006'].geometry} material={materials.dropButtonMaterial} rotation={[Math.PI / 2, 0, 0]}/>
      </group>
    </group>
  );
}
// useGLTF.preload("/calc-base-1.gltf");
useGLTF.preload(BaseModel);
