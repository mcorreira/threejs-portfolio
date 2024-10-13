import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CanvasLoader } from "../components/CanvasLoader";
import { CorreiraCodes } from "../components/CorreiraCodes";
const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          {`Hi, it's me, I'm the problem it's me, at tea time, everybody agrees...`}
          <span className="waving-hand">🎸</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          I might be a junior, but I'm a smart cookie. It might be crazy, but
          hire me baby!
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <CorreiraCodes
              scale={0.05}
              position={[0, 0, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
