import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function CubeContent() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhongMaterial
        color="#000000"
        emissive="#1a1a1a"
        wireframe={false}
        shininess={100}
      />
      <meshStandardMaterial
        color="#ffffff"
        metalness={0.3}
        roughness={0.4}
        envMapIntensity={1}
      />
    </mesh>
  );
}

export default function RotatingCube() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.5], fov: 75 }}
      className="w-full h-full"
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, 5]} intensity={0.5} />
      <CubeContent />
      <OrbitControls
        autoRotate
        autoRotateSpeed={4}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
}
