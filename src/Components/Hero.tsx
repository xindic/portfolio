export const Hero = () => {
  const handleLoad = () => {
    const divElement = document.getElementById("divLoad");
    const heroImg = document.getElementById("imgLoad");
    const textElements = document.getElementsByClassName("text-reveal");

    divElement && divElement.classList.add("divAnimation");
    heroImg && heroImg.classList.add("heroimageAnimation");
    setTimeout(() => {
      Array.from(textElements).forEach((textElement) => {
        textElement.classList.add("textAnimation");
      });
    }, 500);
  };

  window.onload = handleLoad;

  return (
    <div
      id="white"
      className="flex flex-col justify-center items-center h-screen bg-[#FAFAF9]"
    >
      <div
        id="divLoad"
        className="bg-[#DDDAD2] absolute h-[40rem] w-[60vh] z-0 rounded-xl overflow-hidden div aspect-auto"
      >
        <img
          id="imgLoad"
          alt="Hero Image"
          src="https://www.huyng.xyz/assets/heroimg-64242f08.webp"
          className="scale-[130%] rounded-md opacity-50 w-full h-full heroimage"
        />
      </div>
      <div className="overflow-hidden h-[14vh] flex justify-center items-center">
        <h1
          id="black"
          className="text-[6.5rem] scale-x-90 font-generalsans-bold my-[-1rem] text-[#262626] mt-[20vh] text-reveal"
        >
          HEY, I'M XINDIC
        </h1>
      </div>
      <div className="overflow-hidden h-[14vh] flex justify-center items-center">
        {" "}
        <h1
          id="black"
          className="text-[6.5rem] scale-x-90 font-generalsans-bold text-stroke my-[-1rem] mt-[20vh] text-reveal"
        >
          HEY, I'M XINDIC
        </h1>
      </div>
      <div className="overflow-hidden h-[14vh] flex justify-center items-center">
        {" "}
        <h1
          id="black"
          className="text-[6.5rem] scale-x-90 font-generalsans-bold my-[-1rem] text-[#262626] mt-[20vh] text-reveal"
        >
          HEY, I'M XINDIC
        </h1>
      </div>
    </div>
  );
};
