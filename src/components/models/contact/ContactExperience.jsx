import { useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Computer from "./Computer";

const ContactExperience = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // typical breakpoint
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // run on load

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      shadows
      camera={{
        position: isMobile ? [0, 3, 10] : [0, 3, 7], // zoomed out on mobile
        fov: 45,
      }}
    >
      <ambientLight intensity={0.5} color="#fff4e6" />
      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />
      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="#ffd9b3"
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#a46b2d" />
        </mesh>
      </group>

      <group
        scale={isMobile ? 0.025 : 0.03} // smaller model on mobile
        position={[0, -1.49, -2]}
        castShadow
      >
        <Computer />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
