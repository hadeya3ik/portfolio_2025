import { useGLTF, MeshTransmissionMaterial, Text, DragControls, OrbitControls } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber';
import React, { useRef, useEffect } from 'react'
import { useControls } from 'leva';

function Model({ mouse , TextCol}) {
  const mesh = useRef();
  const { nodes } = useGLTF("/medias/bubble.glb");
  const { viewport } = useThree();

  const materialProps = {
    thickness: 0.3,
    roughness: 0.1,
    transmission: 1,
    ior: 1.02,
    chromaticAberration: 0.04,
    backside: true,
  };

  // const materialProps = useControls({
  //   thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
  //   roughness: { value: 0, min: 0, max: 1, step: 0.01 },
  //   transmission: { value: 1, min: 0, max: 1, step: 0.01 },
  //   ior: { value: 1, min: 0, max: 3, step: 0.01 },
  //   chromaticAberration: { value: 0.02, min: 0, max: 1 },
  //   backside: { value: true },
  // });

  useFrame(() => {
    if (mesh.current) {
      const rotationX = (mouse.y.get() - 0.5) * Math.PI * 0.006;
      const rotationY = (mouse.x.get() - 0.5) * Math.PI * 0.006;

      mesh.current.rotation.x += rotationX;
      mesh.current.rotation.y += rotationY;
      mesh.current.rotation.z += 0.003; 
    }
  });

  useEffect(() => {console.log(viewport)}, [viewport])

  return (
     <group scale={Math.max(1.3, viewport.width / 15)}> 
      <Text scale={.7} position={[0, 0, 0]} color={TextCol} font="fonts/PPNeueMontreal-Book.otf" >
        Hadeya Ikram
      </Text>
      <mesh ref={mesh} geometry={nodes.Icosphere.geometry} position={[0, 0, 1]}>
      {/* <mesh ref={mesh} geometry={nodes.Torus.geometry} position={[0, 0, 0]}> */}
      {/* <mesh ref={mesh} geometry={nodes.Cube.geometry} position={[0, 0, 1.25]}> */}
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}

export default Model;