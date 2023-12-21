import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  return (
    <div
      id="white"
      className="h-[200vh] w-auto bg-[#FAFAF9] flex flex-col justify-top items-center space-y-10"
    >
      <div id="projects" className="h-[200vh] w-auto absolute"></div>
      <div className="overflow-hidden h-[14vh] flex justify-center items-center">
        <h2
          id="black"
          className="font-generalsans-semibold text-[6rem] text-scroll"
        >
          Projects
        </h2>
      </div>
      <div className="h-[100vh] w-[90vw] bg-[#d1d1c7] flex hover:rounded-xl hover:scale-[102%] transition-all"></div>
      <div className="h-[100vh] w-[100vw flex justify-center items-center space-x-10">
        <div className="h-[80vh] w-[50vw] bg-[#d1d1c7] hover:rounded-xl hover:scale-[102%] transition-all"></div>
        <div className="h-[60vh] w-[30vw] bg-[#d1d1c7] hover:rounded-xl hover:scale-[102%] transition-all"></div>
      </div>
    </div>
  );
};
