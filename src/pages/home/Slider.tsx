import   { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const logos = [
  "jdc.png",
  "citizen.jpg",
  "edhi.jpg",
  "chippa.png",
  "saylani.jpg",
  "alkhidmat.jpg",
];

const LogoSlider = () => {
   const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);
  console.log(inView)
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
    <>
      <p className="text-5xl text-center  font-bold mb-8 ">
        Our Esteemed NGO Partners
      </p>
      <div
        className="flex mt-4"
        style={{ height: "100px", overflow: "hidden", width: "100%" }}
      >
        <motion.div
          style={{ display: "flex", whiteSpace: "nowrap" }}
          initial={{ x: 0 }}
          animate={{
            x: "-100%",
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 14,
              ease: "linear",
            },
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-shrink-0"
              style={{
                marginRight: "70px",
              }}
            >
              <img
                src={logo}
                alt={`logo-${index}`}
                style={{
                  height: "60px",
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default LogoSlider;
