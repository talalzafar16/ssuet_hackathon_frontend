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
      className="relative mt-5 flex flex-col justify-center items-center w-full h-full py-8 px-4"
    >
      <motion.div
        className="text-5xl font-bold mb-8 border-b-4 border-[#6A0B37]"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        How We Work
      </motion.div>

      <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-[80%] gap-8">
        <motion.div
          className="w-full md:w-[30%] flex flex-col items-center text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img
            className="w-32 h-32 object-cover mb-4"
            src={"/schudule1.jpg"}
            alt="Schedule a Pickup"
          />
          <p className="font-semibold text-[#6A0B37] text-lg mb-2">
            Schedule a Pickup
          </p>
          <p className="text-sm text-gray-700">
            Enter the pickup location, and schedule a pickup. You can also
            choose to go for the drop-off option in case you want to drop the
            donations yourself.
          </p>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          className="w-full md:w-[30%] flex mt-6 py-2 flex-col items-center text-center"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <img
            className="w-32 h-32 object-cover mb-4"
            src={"/schedulepickup1.png"}
            alt="Drop-off Option"
          />
          <p className="font-semibold text-[#6A0B37] text-lg mb-2">
            Drop-off Option
          </p>
          <p className="text-sm  text-gray-700">
            Bring your donations to a nearby drop-off center at your convenience
            and contribute to sustainability.
          </p>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          className="w-full md:w-[30%] mt-[-10px] flex flex-col items-center text-center"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <img
            className="w-32 h-32 object-cover mb-4"
            src={"/gift.png"}
            alt="Receive Rewards"
          />
          <p className="font-semibold text-[#6A0B37] text-lg mb-2">
            Receive Rewards
          </p>
          <p className="text-sm  text-gray-700">
            Earn coupons or vouchers as a token of appreciation for your
            eco-friendly contributions.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SecondSection;
