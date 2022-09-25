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
	
    //vec2 p = (gl_FragCoord.xy * 1.0 - resolution) / min(resolution.x, resolution.y);
    //p = rotate3d((time * 1.0) * PI) * vec2(length(p*p.y),(p.x,p.x));
    // p = rotate3d((time * 2.0) * PI) * vec2(length(p*0.9),(p.x*p.y * p.x));
    //float ti = 0.2 / abs(abs(sin(time + p.x)) - length(p));
    // float ti = 0.1 / abs(abs(sin(time / p.x)) - (p.x ));
    //gl_FragColor = vec4(vec3(ti) * vec3(p.x,p.y,0.4), 0.01);
    //gl_FragColor = vec4(vec3(0.0),0.0);

    //vec2 uPos = ( gl_FragCoord.xy / resolution.xy );	
    //uPos.y -= 0.50;
    //uPos.y /= sin( (uPos.x - uPos.y*20. + time) * 100.0 ) * 4.3;
    //float dy = 0.5/ ( 30. * abs(uPos.y));
    //gl_FragColor = vec4( (uPos.x + 1.0) * dy, 0.4 * dy, dy+=0.0, 1. );

    vec2 r=resolution;
	  vec2 u=(gl_FragCoord.xy/r ) * 2. -1.;
	  vec2 v= u  ;

    //float speed = time * .01;
    //float cycle = clamp(time, 99.0,999.0);
    //vec2 uPos = u;	
    //uPos.y -= 0.5;
    //uPos.y += (tan( uPos.x * cycle + speed ) - tan( uPos.x * 100. + speed )) * .02;
    //float dy = 0.9/ ( 50. * abs(uPos.y));
    //vec4 stars = vec4( (uPos.x + 0.0) * dy, 0.1 * dy, dy+=0.0, 1.0 );
	
	  v = vec2(v.x * abs(1./v.y), abs(1./v.y)) + vec2(0.,time);
	  float g=2.*max(abs((vec2(.5)-(mod(v,vec2(1.)))).x),abs((vec2(.5)-mod(v,vec2(1.))).y));
	  vec3 c1 = vec3(mix(-0.3,.9,u.y*3.),0.,.9) + vec3(0.6);
	  float v1 = max(pow(g,sin(time*1.)*1.+5.0),smoothstep(0.96,.99,g)*2.)*(abs(u.y-.9)-0.01)/1.9;
	  c1 *= v1*5.;
	  float z = ( (abs(abs(u.y)-1.) * abs(u.y)) * 1. );
    vec4 grid = vec4(c1.xyz,1.0);
	  //gl_FragColor = stars;
	  gl_FragColor = mix(grid,vec4(0.0),abs(z -1.));
    // gl_FragColor *= stars;

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
