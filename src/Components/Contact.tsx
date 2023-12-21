export const Contact = () => {
  return (
    <div
      id="white"
      className="h-screen w-auto bg-[#FAFAF9] flex flex-col justify-top items-center space-y-10"
    >
      <div className="overflow-hidden h-[14vh] flex justify-center items-center">
        <h3 className="text-[#8C8C73] font-generalsans-semibold text-[7rem] text-center text-scroll">
          Contact Me
        </h3>
      </div>
      <div className="h-[86vh] w-auto flex justify-center items-center space-x-10">
        <div className="h-[86vh] w-[45vw] flex flex-col">
          <h4
            id="black"
            className="font-generalsans-semibold text-[3rem] text-left"
          >
            Have an awesome idea?
          </h4>
          <h4
            id="black"
            className="font-generalsans-semibold text-[3rem] text-left"
          >
            Let's bring it to life.
          </h4>
        </div>
        <div className="h-[86vh] w-[45vw] bg-[#d1d1c7]"></div>
      </div>
    </div>
  );
};
