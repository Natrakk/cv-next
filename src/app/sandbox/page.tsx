'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedScene() {
    const cubeRef = useRef<THREE.Mesh>(null);
    const cameraGroup = useRef<THREE.Group>(null);

    useFrame((state) => {
        const elapsed = state.clock.getElapsedTime();

        // 🎥 Animation caméra (oscillation autour du centre)
        if (cameraGroup.current) {
            cameraGroup.current.rotation.y = Math.sin(elapsed * 0.2) * 0.5;
        }

        // 📦 Rotation du cube
        if (cubeRef.current) {
            cubeRef.current.rotation.y += 0.01;
            cubeRef.current.rotation.x += 0.005;
        }
    });

    return (
        <>
            <group ref={cameraGroup}>
                {/* Sol */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                    <planeGeometry args={[30, 30]} />
                    <meshStandardMaterial color="#1e293b" />
                </mesh>

                {/* Cube central */}
                <mesh ref={cubeRef} position={[0, 1, 0]}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color="#38bdf8" />
                </mesh>

                {/* Sphère animée */}
                <mesh position={[Math.sin(Math.PI), 1, -5]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color="#facc15" />
                </mesh>

                {/* Lumières */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={1} />
            </group>
        </>
    );
}

export default function SandboxDemo() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-[var(--color-title)] text-2xl font-bold mb-4">Mini film 3D</h1>
            <p className="text-[var(--color-muted)] mb-4">
                Cette scène se joue automatiquement. Elle montre des objets en mouvement et une caméra animée.
            </p>

            <div className="w-full max-w-4xl h-[500px] border border-[var(--color-border)] rounded overflow-hidden">
                <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
                    <AnimatedScene />
                    <OrbitControls enableZoom={false} enablePan={false} />
                </Canvas>
            </div>
        </section>
    );
}
