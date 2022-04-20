import * as THREE from "three";
import * as React from "react"
import {useRef} from "react";
import {Canvas} from "@react-three/fiber";

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
		</Canvas>
	)
}

export default Calculator;
