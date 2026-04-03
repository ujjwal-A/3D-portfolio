import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { fadeIn } from "../utils/motion";


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[80px] z-10 pointer-events-none
      max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <motion.div variants={fadeIn("", "", 0.1, 1)}>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Ujjwal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build high-performance <br className="sm:block hidden" />{" "} web applications and the
            <br className="sm:block hidden" />{" "} systems behind them.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 pointer-events-auto">
            <a
              href="/Ujjwal_Agrawal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ cursor: "pointer" }}
              className="inline-flex items-center gap-2 rounded-lg border border-[#915eff] bg-[#915eff]/10 px-4 py-2 text-[13px] font-medium text-[#c4b5fd] hover:bg-[#915eff]/25 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Resume
            </a>
            <a
              href="/Ujjwal_Agrawal_Resume.pdf"
              download="Ujjwal_Agrawal_Resume.pdf"
              style={{ cursor: "pointer" }}
              className="inline-flex items-center gap-2 rounded-lg border border-[#915eff] bg-[#915eff] px-4 py-2 text-[13px] font-medium text-white hover:bg-[#7c3aed] transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </a>
          </div>
        </motion.div>
      </div>
      <ComputersCanvas />

      <div
        className="absolute xs:bottom-10 bottom-32 w-full flex justify-center
      items-center"
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex
          justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
