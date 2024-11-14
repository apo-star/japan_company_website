import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { DyingUniverse } from "../shaders/DyingUniverse";
import { Perf } from "r3f-perf";
import { Logo } from "../Logo";
import { OrthographicCamera } from "@react-three/drei"; // Optionally, use 'drei' for additional utilities

export const Scene = () => {
  return (
    <Canvas
      style={{
        height: "100vh",
        backgroundColor: "#000",
      }}
    >
      <OrbitControls
        enableZoom={false}
        // enablePan={false}
        enableRotate={false}
        makeDefault
      />
      <OrthographicCamera
        makeDefault
        position={[0, 0, 500]}
        zoom={10}
        near={0.1}
        far={1000}
      />
      <Environment preset="sunset" />
      <Perf position="top-left" />
      <fog attach="fog" args={["white", 50, 190]} />
      <DyingUniverse />
      <Logo rotation={[0, -Math.PI / 4, 0]} position={[-30, 5, -30]}>
        AGILETOKYO
      </Logo>
    </Canvas>
  );
};
