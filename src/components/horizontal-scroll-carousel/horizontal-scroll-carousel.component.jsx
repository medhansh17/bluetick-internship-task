import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import CustomCard from "../card/card.component";

const Carousel = () => {
  return (
    <div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["20px", "-1200px"]);

  return (
    <section ref={targetRef} className="relative h-[2000px] ">
      <div className="sticky top-0 flex h-screen w-[98%] items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 ">
          {cards.map((card) => {
            return <CustomCard card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const cards = [
  {
    url: "",
    title: "",
    description:
      "Bridging Language and Data in the Enterprise Sphere: In the realm of enterprise data management, SQL databases have long stood as the backbone, housing vast quantities of invaluable information. As enterprises increasingly lean on business intelligence (BI) tools to extract insights from these data repositories, the quest for more intuitive and accessible querying methods gains momentum. The emerging solution? Leveraging Large Language Models (LLMs) to interact with SQL databases using natural language.",
    id: 1,
    footer: false,
  },
  {
    url: "https://www.bluetickconsultants.com/speaking-sql-turning-natural-language-into-database-dialogues.html",
    title: "Speaking SQL: Turning Natural Language into Database Dialogues",
    description:
      "Bridging Language and Data in the Enterprise Sphere: In the realm of enterprise data management, SQL databases have long stood as the backbone, housing vast quantities of invaluable information. As enterprises increasingly lean on business intelligence (BI) tools to extract insights from these data repositories, the quest for more intuitive and accessible querying methods gains momentum. The emerging solution? Leveraging Large Language Models (LLMs) to interact with SQL databases using natural language.",
    id: 2,
    footer: true,
  },
  {
    url: "https://www.bluetickconsultants.com/beyond-basics-elevating-ai-with-reinforcement-learning-from-human-feedback.html",
    title:
      "Beyond Basics: Elevating AI with Reinforcement Learning from Human Feedback",
    description:
      "Reinforcement Learning from Human Feedback (RLHF) was arguably the key behind the success of ChatGPT, marking a significant advancement in AI's ability to understand and engage in human language. This method, vital for fine-tuning language models, addresses the complexities and nuances of communication, ensuring AI interactions are natural and intuitive. It navigates the challenges of training AI with diverse internet data, carefully guiding models to avoid replicating inappropriate language or tones.",
    id: 3,
    footer: true,
  },
  {
    url: "https://www.bluetickconsultants.com/the-fine-art-of-tuning-parameter-efficient-fine-tuning.html",
    title: "The Fine Art of Tuning: Parameter-Efficient Fine-Tuning",
    description:
      "Welcome to our exploration of the fascinating world of large language models! As many of you are aware, the scale of these models has skyrocketed recently. Take, for instance, GPT-4, which boasts a staggering 1.8 trillion parameters. The desire to fine-tune these behemoths with custom datasets is growing, yet it poses significant challenges. Fine-tuning requires adjusting countless parameters, which is time-consuming, and the GPU demands are nothing short of immense.",
    id: 4,
    footer: true,
  },
  {
    url: "https://www.bluetickconsultants.com/privaicy-matters-balancing-privacy-price-and-performance-in-in-house-llm-deployments.html",
    title: "PrivAIcy Matters: Balancing Privacy, Price, and Performance",
    description:
      "Welcome to the enthralling universe of Generative AI! Recognized as a realm of artificial intelligence algorithms with the magic to conjure fresh content based on available data, this technology has unassumingly become the new frontier for a plethora of industries, including tech, banking, and media. And, no surprises here, the technological world has openly embraced it in myriad innovative ways.",
    id: 5,
    footer: true,
  },
];

export default Carousel;
