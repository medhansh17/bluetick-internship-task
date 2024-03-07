import "./hero.styles.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Hero = () => {
  const Ref = useRef(null);
  const inView = useInView(Ref, { amount: 0.3, once: true });
  const animationOnView = {
    hidden: {
      y: "30vh",
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };
  return (
    <div id="heroSection">
      <div id="heroContainer">
        <p className="bold">Welcome to BlueTick</p>
        <div className="mask" ref={Ref}>
          <motion.h1
            variants={animationOnView}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="poppins z-10"
          >
            Innovative GenAI <br />
            Solutions
          </motion.h1>
        </div>
        <p>
          Bluetick Consultants is a technology-driven startup that transforms
          enterprises with cutting-edge scalable and privacy-focused generative
          AI solutions. Founded in 2017, Bluetick Consultants is a
          technology-driven firm that has made a significant impact in the
          Indian and US startup ecosystems. Our AI expertise helps companies
          capture hidden value and achieve operational efficiency. We help our
          clients unlock the full potential of AI by building trust layers to
          ensure robust and ethical AI solutions.
        </p>
        <a
          href="https://www.bluetickconsultants.com/generative-ai.html"
          target="_blank"
          rel="noreferrer"
        >
          <button id="heroBtn">Learn More</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
