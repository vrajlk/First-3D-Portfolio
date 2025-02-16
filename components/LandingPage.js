import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"

export default function LandingPage() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial color="#4B0082" attach="material" distort={0.5} speed={2} />
          </Sphere>
        </Canvas>
      </div>
      <div className="z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4 text-white"
        >
          VRAJ LAKUM
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-8 text-gray-300"
        >
          Web Developer | Student at Silver Oak University
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-indigo-700 transition duration-300"
        >
          Explore My Work
        </motion.button>
      </div>
    </div>
  )
}

