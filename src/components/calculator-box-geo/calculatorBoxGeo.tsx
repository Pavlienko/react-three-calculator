import { MeshProps } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import "./calculatorBoxGeo.css";
import { addSign, clearSign, addToHistory } from "../../features/signSlice";
import { AppDispatch } from "../../store/store";

import CalcButton from "../calc-button"

type Buttons = {
  scale?: [number, number, number];
  color?: string;
  text: string;
  sign?: string;
  onChange?: any;
} & MeshProps;

const CalculatorBoxGeo: React.FC<Buttons> = (props: Buttons) => {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!);
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const calculate = (value: string) => {
    switch (value) {
      case "AC":
        dispatch(clearSign());
        break;
      case "=":
        props.sign ? dispatch(addToHistory(props.sign)) : console.log("wow");
        break;
      default:
        dispatch(addSign(value));
    }
  };

  return (
    <mesh
      {...props}
      ref={ref}
      castShadow
      receiveShadow
      scale={[clicked ? 2.4 : 1, 1, 1]}
      onClick={(event) => {
        calculate(props.text);
        click(!clicked);
      }}
      onPointerOver={(event) => {
        click(true);
        hover(true);
      }}
      onPointerOut={(event) => {
        click(false);
        hover(false);
      }}
    >
      {/* <boxGeometry args={props.scale ? props.scale : [0.2, 1, 1.1]} /> */}
      <CalcButton />
      {/* <meshStandardMaterial
        color={hovered ? "red" : props.color ? props.color : "darkgrey"}
      /> */}
      <Html
        transform={true}
        rotation={[0, Math.PI / 2, 0]}
        position={[0.01, 0.225, 0]}
        occlude={[ref]}
        className="calc-symbols"
        wrapperClass="calc-symbols-wrapper"
      >
        {props.text}
      </Html>
    </mesh>
  );
};

export default CalculatorBoxGeo;
