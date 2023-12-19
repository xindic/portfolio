import "./App.css";
import Lenis from "@studio-freight/lenis";
import { Hero } from "./Components/Hero";
import { Nav } from "./Components/Nav";
import { Info } from "./Components/Info";
import { About } from "./Components/About";
import { Services } from "./Components/Services";

function App() {
  const lenis = new Lenis();

  function raf(time: any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <Nav />
      <Hero />
      <Info />
      <About />
      <Services />
    </>
  );
}

export default App;
