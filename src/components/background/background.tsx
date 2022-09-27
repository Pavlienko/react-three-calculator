import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
// import glsl from 'babel-plugin-glsl/macro';

const Background: React.FC = (props: JSX.IntrinsicElements["mesh"]) => {
  const refMesh = useRef<THREE.Mesh>(null!);
  const refMat = useRef<THREE.ShaderMaterial>(null!);

  const uniforms = useMemo(
    () => ({
      time: {
        type: "f",
        value: 0.0,
      },
      resolution: {
        type: "v2",
        value: new THREE.Vector2(
          window.innerWidth * window.devicePixelRatio,
          window.innerHeight * window.devicePixelRatio
        ),
      },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    refMat.current.uniforms.time.value = clock.getElapsedTime();
    // refMat.current.uniforms.resolution.value = new THREE.Vector2(
    //   window.innerWidth * window.devicePixelRatio,
    //   window.innerHeight * window.devicePixelRatio
    // );
  });

  const vertexShader = `
void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;
  gl_Position = projectedPosition;
}
`;

  const fragmentShader = ` 
#ifdef GL_ES
precision lowp float;
#endif

uniform float time;
uniform vec2 resolution;

#define PI 3.14

void main( void )
{
    vec2 r=resolution;
	  vec2 u=(gl_FragCoord.xy/r) * 2. -1.;
	  vec2 v= u;
	
	  v = vec2(v.x * (1./v.y), abs(1./v.y)) + vec2(0.,time);
	  float g=2.*max(abs((vec2(.5)-(mod(v,vec2(1.)))).x),abs((vec2(0.5)-mod(v,vec2(1.))).y));
	  float c1 = max(pow(smoothstep(0.3,1.,g-0.2),sin(time)+5.0),step(0.99,g)*5.)*pow((abs(u.y)),2.);
	  float z = ( (abs(abs(u.y)-1.) * abs(u.y)) * 1. );
    vec4 grid = vec4(0.0,(c1),0.0,c1);
    gl_FragColor = grid;
	  // gl_FragColor = mix(grid,vec4(0.0),abs(z -1.));

}
    `;

  return (
    <>
      <mesh ref={refMesh} position={[0, 0, -3]} scale={[2.5, 2.5, 2.5]}>
        <planeBufferGeometry attach="geometry" args={[16, 9]} />
        <shaderMaterial
          ref={refMat}
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
        />
      </mesh>
    </>
  );
};

export default Background;
