import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const stats = [
  { value: 4, suffix: " yrs", label: "Industry Experience" },
  { value: 70, suffix: "%", label: "DB Query Reduction" },
  { value: 3, suffix: "x", label: "Page Load Improvement" },
  { value: 85, suffix: "%", label: "Defect Reduction" },
  { value: 10, suffix: "+", label: "Business Modules Owned" },
  { value: 30, suffix: "%", label: "User Activation Uplift" },
];

const AnimatedCounter = ({ value, suffix, duration = 1800 }) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Real impact
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          By the Numbers.
        </h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={fadeIn("up", "spring", index * 0.1, 0.6)}
            className="bg-black-200 rounded-2xl p-6 flex flex-col items-center text-center"
          >
            <p className="text-[#915eff] font-black text-[42px] leading-tight">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-secondary text-[14px]">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Stats, "stats");
