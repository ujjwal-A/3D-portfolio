import { lazy, Suspense } from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useInView } from "../hooks/useInView";

const BallCanvas = lazy(() => import("./canvas/Ball"));

// Each BallCanvas spins up its own WebGL context, and browsers cap how many can
// be live at once (~16). Mounting every ball at once blew past that limit and
// silently dropped contexts. So we only mount a ball's canvas while its cell is
// near the viewport, and unmount it — freeing the context — once it scrolls
// away. See useInView for the full rationale.
const TechBall = ({ technology }) => {
  const [ref, inView] = useInView("150px");

  return (
    <div className="w-28 h-28" ref={ref}>
      {inView && (
        <Suspense fallback={null}>
          <BallCanvas icon={technology.icon} />
        </Suspense>
      )}
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
