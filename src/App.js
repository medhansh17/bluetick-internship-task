import "./App.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "./components/navbar/navbar.component";
import Hero from "./components/hero/hero.component";
import WhatWeOffer from "./components/offer/offer.component";
import Form from "./components/form/form.component";
import BlogSection from "./components/blog/blog.component";
import Footer from "./components/footer/footer.component";
function App() {
  const Ref = useRef(null);
  const inView = useInView(Ref, { amount: 0.2, once: true });
  const animationOnView = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };
  return (
    <div id="App">
      <Navbar />
      <Hero />
      <motion.div
        ref={Ref}
        variants={animationOnView}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <WhatWeOffer />
      </motion.div>
      <BlogSection />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
