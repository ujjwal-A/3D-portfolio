import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc/index";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px]
      shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
            flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.05, 1)}
        className="mt-4 text-white font-semibold text-[20px] max-w-3xl"
      >
        I build things that scale, perform, and don't break.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl
        leading-[30px]"
      >
        Software engineer with 4 years of experience across the stack — from
        frontend architecture (React + TypeScript) to the performance-oriented
        backend systems behind it. I’ve shipped production features at scale —
        cache systems that cut DB load by 70%, distributed transaction frameworks
        that eliminated partial commits, and a migration from MongoDB to sharded
        PostgreSQL built for horizontal scale.
        <br /> <br />
        Open to full-stack and frontend roles with strong ownership and a high
        technical bar.
      </motion.p>

      <div className="mt-8 flex flex-col gap-4 max-w-3xl">
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          className="inline-flex items-center gap-3 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 px-5 py-4"
        >
          <span className="text-2xl">🏆</span>
          <div>
            <p className="text-yellow-300 font-semibold text-[15px]">
              Won Simply Vyapar Tech Hackathon 2025
            </p>
            <p className="text-secondary text-[13px] mt-0.5">
              Generative AI track — competed against internal engineering teams, building an AI-powered solution judged on technical depth and business impact.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 0.4, 0.75)}
          className="inline-flex items-center gap-3 rounded-2xl border border-blue-400/20 bg-blue-400/5 px-5 py-4"
        >
          <span className="text-2xl">🎓</span>
          <div>
            <p className="text-white font-semibold text-[15px]">
              Ramaiah Institute of Technology
            </p>
            <p className="text-secondary text-[13px] mt-0.5">
              Bachelor of Engineering &nbsp;·&nbsp; Aug 2018 – Jul 2022 &nbsp;·&nbsp; 8.6 / 10
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} title={service.title} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
