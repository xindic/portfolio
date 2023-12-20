import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Info = () => {
  return (
    <div
      id="white"
      className="h-screen w-auto bg-[#FAFAF9] flex items-center justify-center"
    >
      <div
        id="info"
        className="w-[80vw] h-[50vh]  flex justify-center items-center"
      >
        <h3 className="text-[#D1D1C7] font-generalsans-medium text-[5rem] text-left leading-[6rem]">
          I create elevating digital experiences that inspire and connect people
          through development and design.
        </h3>
      </div>
    </div>
  );
};
