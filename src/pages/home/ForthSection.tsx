import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const SecondSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative  mt-5 flex flex-col justify-center items-center w-full h-full py-8 px-4"
    >
      <motion.div
        className="text-5xl font-bold mb-8 border-b-4 border-[#6A0B37]"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Why Donate Through Heart Hands
      </motion.div>
      <div className="flex flex-col md:flex-row justify-between items-start w-full md:w-[80%] gap-8">
        <motion.div
          className="w-full md:w-[50%] flex flex-col items-center text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img
            className="w-28 h-28 object-cover mb-4"
            src={"/saveenvironment.png"}
            alt="Schedule a Pickup"
          />
          <p className="font-semibold text-[#6A0B37] text-4xl mb-2">
            Save The Environment
          </p>

          <p className="text-large font-semibold text-gray-700">
            Prevent your unwanted items from ending up in landfills by giving
            them a second life and placing them in the hands of those who truly
            need them.
          </p>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          className="w-full md:w-[50%] flex flex-col items-center text-center"
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img
            className="w-28 h-28 object-cover mb-4"
            src={"/surprise.png"}
            alt="Feel Good"
          />
          <p className="font-semibold text-[#6A0B37] text-4xl mb-2">
            Get Surprise Rewards
          </p>

          <p className="text-large font-semibold text-gray-700">
            From time to time, we delight you with our exclusive "Happiness
            Box," filled with surprise goodies and vouchers just for you.
          </p>
        </motion.div>
      </div>
      <div className="flex flex-col mt-10 md:flex-row justify-between items-start w-full md:w-[80%] gap-8">
        <motion.div
          className="w-full md:w-[50%] flex flex-col items-center text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img
            className="w-28 h-28 object-cover mb-4"
            src={"/convenient.png"}
            alt="Schedule a Pickup"
          />
          <p className="font-semibold text-[#6A0B37] text-4xl mb-2">
            Convenient
          </p>

          <p className="text-large font-semibold text-gray-700">
            Donate gently used items from the comfort of your home. Enjoy
            doorstep pickup and ensure your contributions reach those in need.
          </p>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          className="w-full md:w-[50%] flex flex-col items-center text-center"
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img
            className="w-28 h-28 object-cover mb-4"
            src={"/feelgood.png"}
            alt="Feel Good"
          />
          <p className="font-semibold text-[#6A0B37] text-4xl mb-2">
            Feel Good Factor
          </p>

          <p className="text-large font-semibold text-gray-700">
            Giving brings joy and boosts your happiness, creating a positive and
            uplifting impact on you.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SecondSection;
