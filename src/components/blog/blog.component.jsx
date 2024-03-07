import "./blog.styles.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CustomCard from "../card/card.component";
import speakingSqlImage from "../../Images/speakingSql.png";
import FineArt from "../../Images/FineArt.png";
import Beyond from "../../Images/beyondbasics.png";
import Privacy from "../../Images/PrivAicy.webp";
const BlogSection = () => {
  const Ref1 = useRef(null);
  const Ref2 = useRef(null);
  const Ref3 = useRef(null);
  const Ref4 = useRef(null);

  const inView1 = useInView(Ref1, { amount: 0.5, once: true });
  const inView2 = useInView(Ref2, { amount: 0.7, once: true });
  const inView3 = useInView(Ref3, { amount: 0.7, once: true });
  const inView4 = useInView(Ref4, { amount: 0.7, once: true });

  const animationOnView1 = {
    hidden: {
      scaleY: 0,
      filter: "brightness(8)",
      transition: {
        duration: 0.8,
      },
    },
    visible: {
      scaleY: 1,
      filter: "brightness(1)",
      transition: {
        duration: 0.8,
      },
    },
  };

  const animationOnView2 = {
    hidden: {
      scaleY: 0,
      filter: "brightness(8)",
      transition: {
        duration: 0.8,
      },
    },
    visible: {
      scaleY: 1,
      filter: "brightness(1)",
      transition: {
        duration: 0.8,
      },
    },
  };
  const animationOnView3 = {
    hidden: {
      scaleY: 0,
      filter: "brightness(8)",
      transition: {
        duration: 0.8,
      },
    },
    visible: {
      scaleY: 1,
      filter: "brightness(1)",
      transition: {
        duration: 0.8,
      },
    },
  };
  const animationOnView4 = {
    hidden: {
      scaleY: 0,
      filter: "brightness(8)",
      transition: {
        duration: 0.8,
      },
    },
    visible: {
      scaleY: 1,
      filter: "brightness(1)",
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div id="blogContainer">
      <div className="cardList">
        <div className="outer">
          <div>
            <h1 className="poppins" id="blogh1">
              OUR BLOGS
            </h1>
            <motion.div
              ref={Ref1}
              variants={animationOnView1}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
              style={{ transformOrigin: "top", marginTop: "10%" }}
            >
              <CustomCard
                id="1"
                title="Speaking SQL: Turning Natural Language into Database Dialogues"
                content="Bridging Language and Data in the Enterprise Sphere: In the realm of enterprise data management, SQL databases have long stood as the backbone, housing vast quantities of invaluable information. As enterprises increasingly lean on business intelligence (BI) tools to extract insights from these data repositories, the quest for more intuitive and accessible querying methods gains momentum. The emerging solution? Leveraging Large Language Models (LLMs) to interact with SQL databases using natural language."
                imageUrl={speakingSqlImage}
                url="https://www.bluetickconsultants.com/speaking-sql-turning-natural-language-into-database-dialogues.html"
              />
            </motion.div>
          </div>
          <motion.div
            ref={Ref2}
            variants={animationOnView2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            style={{ transformOrigin: "top" }}
          >
            <CustomCard
              id="2"
              title="Beyond Basics: Elevating AI with Reinforcement Learning from Human Feedback"
              content="Reinforcement Learning from Human Feedback (RLHF) was arguably the key behind the success of ChatGPT, marking a significant advancement in AI's ability to understand and engage in human language. This method, vital for fine-tuning language models, addresses the complexities and nuances of communication, ensuring AI interactions are natural and intuitive. It navigates the challenges of training AI with diverse internet data, carefully guiding models to avoid replicating inappropriate language or tones."
              imageUrl={Beyond}
              url="https://www.bluetickconsultants.com/beyond-basics-elevating-ai-with-reinforcement-learning-from-human-feedback.html"
            />
          </motion.div>
        </div>
        <div className="outer">
          <motion.div
            ref={Ref3}
            variants={animationOnView3}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            style={{ transformOrigin: "top" }}
          >
            <CustomCard
              className="marginTop"
              id="3"
              title="The Fine Art of Tuning: Parameter-Efficient Fine-Tuning"
              content="Welcome to our exploration of the fascinating world of large language models! As many of you are aware, the scale of these models has skyrocketed recently. Take, for instance, GPT-4, which boasts a staggering 1.8 trillion parameters. The desire to fine-tune these behemoths with custom datasets is growing, yet it poses significant challenges. Fine-tuning requires adjusting countless parameters, which is time-consuming, and the GPU demands are nothing short of immense."
              imageUrl={FineArt}
              url="https://www.bluetickconsultants.com/the-fine-art-of-tuning-parameter-efficient-fine-tuning.html"
            />
          </motion.div>
          <motion.div
            ref={Ref4}
            variants={animationOnView4}
            initial="hidden"
            animate={inView4 ? "visible" : "hidden"}
            style={{ transformOrigin: "top" }}
          >
            <CustomCard
              className="marginTopN"
              id="4"
              title="PrivAIcy Matters: Balancing Privacy, Price, and Performance"
              content="Welcome to the enthralling universe of Generative AI! Recognized as a realm of artificial intelligence algorithms with the magic to conjure fresh content based on available data, this technology has unassumingly become the new frontier for a plethora of industries, including tech, banking, and media. And, no surprises here, the technological world has openly embraced it in myriad innovative ways."
              imageUrl={Privacy}
              url="https://www.bluetickconsultants.com/privaicy-matters-balancing-privacy-price-and-performance-in-in-house-llm-deployments.html"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
