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
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    refMat.current.uniforms.time.value = clock.getElapsedTime();
  });

  const vertexShader = `
void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.y += sin(modelPosition.x * 4.0) * 0.2;

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
mat2 rotate3d(float angle){
	return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}


void main( void )
{
	
    vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
    p = rotate3d((time * 2.0) * PI) * vec2(length(p*0.9),(p.x*p.y * p.x));
    float ti = 0.1 / abs(abs(sin(time + p.x)) - length(p));
    gl_FragColor = vec4(vec3(ti) * vec3(p.x,p.y,0.4), 0.01);

}
    `;

  return (
    <>
      <mesh ref={refMesh} position-z={[-3]} scale={[2.5, 2.5, 2.5]}>
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
