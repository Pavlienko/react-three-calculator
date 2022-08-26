import { extend, MeshProps } from "@react-three/fiber";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { useRef, useState } from "react";
import Montserrat from "../../assets/montserrat-medium-regular.json";

extend({ TextGeometry });

type Buttons = {
  text?: string;
} & MeshProps;

export default function CalculatorBoxGeo(props: Buttons) {

  // const {buttons} = props;
  const font = new FontLoader().parse(Montserrat);
  const textOptions = {
    font,
    size: 1,
    height: 0.1,
  };

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
      <meshStandardMaterial color={hovered ? "red" : "blue"} opacity={0.1}/>
      {/* {buttons ? console.log(buttons) : console.log("nothing")} */}
      <mesh >
        <textGeometry attach="geometry" args={["kata", textOptions]} />
        <meshStandardMaterial color={"yellow"} />
      </mesh>
    </mesh>
  );
}