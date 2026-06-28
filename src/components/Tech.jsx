import { useEffect, useRef, useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Each BallCanvas spins up its own WebGL context, and browsers cap how many
// can be live at once (~16). Mounting all balls at once blew past that limit
// and silently dropped the first contexts (blank cells). So we only mount a
// ball's canvas while its cell is near the viewport, and unmount it — freeing
// the context — once it scrolls away.
const TechBall = ({ technology }) => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "150px" }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-28 h-28" ref={containerRef}>
      {visible && <BallCanvas icon={technology.icon} />}
    </div>
  );
};

const Tech = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 justify-items-center gap-10">
      {technologies.map((technology) => (
        <TechBall key={technology.name} technology={technology} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
