import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  return (
    <div
      id="white"
      className="h-screen w-auto bg-[#FAFAF9] flex flex-col justify-top items-center"
    >
      <div id="projects" className="h-screen w-auto absolute"></div>
      <div className="overflow-hidden h-[14vh] flex justify-center items-center">
        <h2
          id="black"
          className="font-generalsans-semibold text-[6rem] text-scroll"
        >
          Projects
        </h2>
      </div>
    </div>
  );
};
