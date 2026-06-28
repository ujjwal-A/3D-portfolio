import Hero from './Hero';
import Navbar from './Navbar';
import About from './About';
import Tech from './Tech';
import Experience from './Experience';
import Works from './Works';
import Stats from './Stats';
import Contact from './Contact';

// Canvas components are intentionally NOT re-exported here. They pull in
// three.js / @react-three, so they're loaded via dynamic import() at their
// call sites (React.lazy) to keep them out of the main bundle.
export {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Stats,
  Contact,
};
