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
      id="about-us"
      ref={sectionRef}
      className="relative bg-gray-100 mt-5 flex flex-col justify-center items-center w-full h-full py-8 px-4"
    >
      <motion.div
        className="text-5xl font-bold mb-8 border-b-4 border-[#6A0B37]"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.div>

      <div className="flex flex-col md:flex-row justify-between items-start w-full md:w-[80%] gap-8">
        <motion.div
          className="w-full md:w-[48%] flex flex-col items-center text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className="font-semibold text-[#6A0B37] text-4xl mb-2">
            Our Mission
          </p>
          <p className="text-large font-semibold text-gray-700">
            Empowering Change, One Sustainable Step at a Time
          </p>
          <p className="text-sm mt-3 text-gray-600">
            At Heart Hand, our mission is to revolutionize the way we manage
            textile waste. We aim to provide a seamless, user-friendly platform
            that simplifies clothing donations and disposals, empowering
            individuals to contribute to sustainability. By connecting donors
            with NGOs and brands, we promote eco-friendly practices and provide
            incentives to encourage active participation. Our goal is to foster
            a culture of sustainability and reduce the environmental impact
            caused by textile waste.
          </p>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          className="w-full md:w-[48%] flex flex-col items-center text-center"
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className="font-semibold text-[#6A0B37] text-4xl mb-2">
            OUR VALUES
          </p>
          <p className="text-large font-semibold text-gray-700">
            Empowering sustainability and fostering community
          </p>
          <p className=" text-sm mt-3 text-gray-600">
            Sustainability: We are dedicated to creating a circular fashion
            economy, encouraging the reuse and recycling of clothing to reduce
            environmental pollution and textile waste.
          </p>
          <p className=" text-sm mt-3 text-gray-600">
            Community Engagement: We believe in building a community of
            individuals, NGOs, and brands that work together towards a common
            goal of sustainable living.
          </p>
          <p className=" text-sm mt-3 text-gray-600">
            Transparency: Our platform is committed to providing clear, open
            communication between donors, NGOs, and brand partners, ensuring
            trust and integrity in all interactions.
          </p>
          <p className=" text-sm mt-3 text-gray-600">
            Innovation: We continuously strive to innovate and improve our
            platform, incorporating the latest technology to make the donation
            and disposal process easier and more rewarding.
          </p>
          <p className=" text-sm mt-3 text-gray-600">
            Empowerment: By offering rewards such as coupons and vouchers, we
            aim to motivate individuals to participate in sustainable behavior
            and make a positive impact on the environment.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SecondSection;
