import Layout from '../../compoenents/layout/index.tsx'
import SecondSection from "./SecondSection.js"
import ThirdSection from "./ThirdSection.tsx"
import ForthSection from "./ForthSection.tsx"
import LogoSlider from "./Slider.tsx"

import { motion } from "framer-motion";
const Home = () => {
  return (
    <Layout>
      <div className="relative h-screen w-full flex justify-end items-center">
        <div className="absolute inset-0 z-0">
          <img src="/Ellipse8.png" alt="Background" className="h-full " />
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-[50%] h-[50%]">
          <motion.div
            className="flex flex-col items-center justify-start text-center px-4 py-16 md:py-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ color: "#6A0B37" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Give Your Clothes a New Life, Sustainably
            </motion.h1>
            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              Join the movement to reduce textile waste and protect the
              environment. Donate or dispose of your unused clothes effortlessly
              while earning rewards. Partner with NGOs and sustainable brands to
              make a positive impact and embrace eco-friendly practices today.
            </motion.p>
          </motion.div>
        </div>
      </div>
      <ForthSection />

      <ThirdSection />
      <SecondSection />
      <LogoSlider />
    </Layout>
  );
}

export default Home