import * as THREE from "three";
import * as React from "react"
import {useRef} from "react";
import {Canvas, useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

function Box(props: JSX.IntrinsicElements["mesh"]) {
	const ref = useRef<THREE.Mesh>(null!);
	return(
		<mesh {...props} ref={ref}>
			<boxGeometry args={[1,1,1]} />
		</mesh>	
	);
}

const Calculator: React.FC = () => {
	return(
		<Canvas>
			<Box position={[0,0,0]} />
			<Box position={[1,1,1]} />
		</Canvas>
	)
}

export default Calculator;
