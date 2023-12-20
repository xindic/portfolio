import "./App.css";
import Lenis from "@studio-freight/lenis";
import { Hero } from "./Components/Hero";
import { Nav } from "./Components/Nav";
import { Info } from "./Components/Info";
import { About } from "./Components/About";
import { Services } from "./Components/Services";
import { Trailer } from "./Components/Trailer";
import { Scroll } from "./Components/Scroll";
import { Projects } from "./Components/Projects";
import { Load } from "./Components/Load";
import { Reveal } from "./Components/Reveal";

function App() {
  const lenis = new Lenis();

  function raf(time: any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <Trailer />
      <Load />
      <Scroll />
      <Reveal />
      <Nav />
      <Hero />
      <Info />
      <About />
      <Services />
      <Projects />
    </>
  );
}

export default App;
