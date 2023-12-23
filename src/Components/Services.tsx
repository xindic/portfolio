export const Services = () => {
  return (
    <div
      id="white"
      className="h-[85vh] w-auto bg-[#FAFAF9] flex flex-col items-top justify-center space-y-10"
    >
      <div className="overflow-hidden h-[14vh] flex justify-center items-center">
        <h3 className="text-[#8C8C73] font-generalsans-semibold text-[7rem] text-center text-scroll">
          Services
        </h3>
      </div>
      <div
        id="white"
        className="h-screen w-auto bg-[#FAFAF9] flex flex-row items-top justify-center"
      >
        <div className="h-[60vh] w-[30vw] flex flex-col mx-[6vw]">
          <h4
            id="black"
            className="text-[#000000] font-generalsans-semibold text-[2.5rem] mt-5 text-left"
          >
            my expertise.
          </h4>
          <p
            id="black"
            className="text-[#303030] font-generalsans-medium text-[1rem] text-left"
          >
            Most of my focus is in the game development industry, however I also
            have experience in web development. With each of my services, my
            goal is to deliver an impactful experience for everyone.
          </p>
          <h4
            id="black"
            className="text-[#000000] font-generalsans-semibold text-[2.5rem] text-left mt-[3rem]"
          >
            my toolbox.
          </h4>
          <p
            id="black"
            className="text-[#303030] font-generalsans-medium text-[1rem] text-left"
          >
            These are my go to tech stack to make any projects happen. I am
            always eager of learning more about my current stack, and new
            technologies that could expand my horizons.
          </p>
        </div>
        <div className="h-[60vh] w-[40vw] flex flex-col items-start space-y-[-1rem]">
          <h4 className="text-[#AEAE9D] font-generalsans-bold text-[3rem] text-center">
            Game Development
          </h4>
          <h4 className="text-[#AEAE9D] font-generalsans-bold text-[3rem] text-center">
            Game Design
          </h4>{" "}
          <h4 className="text-[#AEAE9D] font-generalsans-bold text-[3rem] text-center">
            UI/UX Design
          </h4>{" "}
          <br></br>
          <h4 className="text-[#AEAE9D] font-generalsans-bold text-[3rem] text-center">
            C
          </h4>
          <h4 className="text-[#AEAE9D] font-generalsans-bold text-[3rem] text-center">
            C#
          </h4>
          <h4 className="text-[#AEAE9D] font-generalsans-bold text-[3rem] text-center">
            Lua
          </h4>
          <h4 className="text-[#AEAE9D] font-generalsans-bold text-[3rem] text-center">
            ReactJS
          </h4>
          <h4 className="text-[#AEAE9D] font-generalsans-bold text-[3rem] text-center">
            Javascript
          </h4>
          <h4 className="text-[#AEAE9D] font-generalsans-bold text-[3rem] text-center">
            TailwindCSS
          </h4>
        </div>
      </div>
    </div>
  );
};
