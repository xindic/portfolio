import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  return (
    <div
      id="white"
      className="h-[160vh] w-auto bg-[#FAFAF9] flex flex-col justify-top items-center"
    >
      <div id="projects" className="h-[160vh] w-auto absolute"></div>
      <div className="overflow-hidden h-[14vh] flex justify-center items-center mb-5">
        <h2
          id="black"
          className="font-generalsans-semibold text-[6rem] text-scroll"
        >
          Projects
        </h2>
      </div>
      <div className="h-[30vw] w-[60vw] hover:rounded-xl hover:scale-[102%] transition-all overflow-hidden">
        <a
          target="_blank"
          href="https://www.roblox.com/games/14985614364/ALIEN-Weight-Lifting-Simulator"
        >
          <img
            src="https://tr.rbxcdn.com/1f20694c727ba2bab87fd663d2c622df/768/432/Image/Png"
            alt="Weight Lifting Simulator"
            className="h-full w-full hover:scale-[105%] transition-all"
          />
        </a>
      </div>
      <div className="h-[2vw] w-[60vw] flex mt-4 mb-10 justify-start items-center space-x-2">
        <div className="h-[3vh] w-[4vw] rounded-[2rem] border text-[#8C8C73] font-generalsans-medium text-center border-[#8C8C73]">
          2023
        </div>
        <div className="h-[3vh] w-[6vw] rounded-[2rem] border text-[#8C8C73] font-generalsans-medium text-center border-[#8C8C73]">
          Lua
        </div>
      </div>
      <div className="h-[30vw] w-[60vw] hover:rounded-xl hover:scale-[102%] transition-all overflow-hidden">
        <a
          target="_blank"
          href="https://www.roblox.com/games/15077806640/Tarnished"
        >
          <img
            src="https://tr.rbxcdn.com/8d31645e27780802eb271cd2458c7fc2/768/432/Image/Png"
            alt="Weight Lifting Simulator"
            className="h-full w-full hover:scale-[106%] transition-all scale-[101%]"
          />
        </a>
      </div>
      <div className="h-[2vw] w-[60vw] flex mt-4 mb-10 justify-start items-center space-x-2">
        <div className="h-[3vh] w-[4vw] rounded-[2rem] border text-[#8C8C73] font-generalsans-medium text-center border-[#8C8C73]">
          2023
        </div>
        <div className="h-[3vh] w-[6vw] rounded-[2rem] border text-[#8C8C73] font-generalsans-medium text-center border-[#8C8C73]">
          Lua
        </div>
      </div>
    </div>
  );
};
