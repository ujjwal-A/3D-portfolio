import { useEffect, useRef, useState } from "react";

// Gates heavy WebGL canvases on viewport visibility. Each <Canvas> holds its
// own WebGL context, and browsers cap live contexts at ~16 — so we only mount a
// canvas while its container is near the viewport and unmount it (freeing the
// context) once it scrolls away. This keeps the page well under the cap and
// stops the browser from silently evicting contexts (blank balls / broken
// Earth / missing stars).
export const useInView = (rootMargin = "0px") => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, inView];
};
