import * as THREE from "three";
import { Center, Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const Logo = ({
  children,
  font = "/Inter_Medium_Regular.json",
  ...props
}) => {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.x = THREE.MathUtils.lerp(
        ref.current.position.x,
        state.mouse.x * 4,
        0.1,
      );
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        state.mouse.y / 4,
        0.1,
      );
      ref.current.rotation.y = 0.8;
    }
  });
  return (
    <>
      <group ref={ref}>
        <Center scale={[0.8, 1, 1]} front top {...props}>
          <Text3D
            bevelEnabled
            font={font}
            scale={5}
            letterSpacing={-0.03}
            height={0.25}
            bevelSize={0.02}
            bevelSegments={10}
            curveSegments={128}
            bevelThickness={0.01}
          >
            {children}
            <meshStandardMaterial
              transparent
              color={"#AAFFFF"}
              metalness={1}
              roughness={0.1}
            />
            <pointLight position={[5, 5, 5]} intensity={10} color={"#AAFFFF"} />
            <pointLight
              position={[-5, -5, 5]}
              intensity={5}
              color={"#AAFFFF"}
            />
            <spotLight
              position={[0, 10, 10]}
              intensity={0.8}
              color={"#AAFFFF"}
            />
          </Text3D>
        </Center>
      </group>
    </>
  );
};
