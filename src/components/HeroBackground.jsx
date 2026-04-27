import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Torus, Sphere, Float } from '@react-three/drei';
import { useTheme } from '../contexts/ThemeContext';

const AnimatedShape = ({ children, position, speed }) => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed;
      meshRef.current.rotation.y += delta * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        {children}
      </mesh>
    </Float>
  );
};

const HeroBackground = () => {
  const { isDark } = useTheme();
  
  // Adjusted colors based on theme
  const materialColor1 = isDark ? '#6366F1' : '#4F46E5'; // Primary
  const materialColor2 = isDark ? '#22D3EE' : '#06B6D4'; // Secondary
  const materialColor3 = isDark ? '#A855F7' : '#9333EA'; // Accent

  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color={materialColor2} />

        <AnimatedShape position={[-4, 2, -2]} speed={0.2}>
          <Icosahedron args={[1.5, 0]}>
            <meshStandardMaterial color={materialColor1} wireframe={true} transparent opacity={0.6} />
          </Icosahedron>
        </AnimatedShape>

        <AnimatedShape position={[5, -2, -3]} speed={0.3}>
          <Torus args={[1.2, 0.4, 16, 32]}>
            <meshStandardMaterial color={materialColor2} roughness={0.2} metalness={0.8} transparent opacity={0.7} />
          </Torus>
        </AnimatedShape>

        <AnimatedShape position={[-5, -4, -5]} speed={0.1}>
          <Sphere args={[1, 32, 32]}>
            <meshStandardMaterial color={materialColor3} wireframe={true} transparent opacity={0.5} />
          </Sphere>
        </AnimatedShape>
        
        <AnimatedShape position={[4, 4, -4]} speed={0.25}>
          <Icosahedron args={[1, 1]}>
            <meshStandardMaterial color={materialColor1} roughness={0.1} metalness={0.9} transparent opacity={0.6} />
          </Icosahedron>
        </AnimatedShape>

      </Canvas>
    </div>
  );
};

export default HeroBackground;
