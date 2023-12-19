export const Hero = () => {
  const handleLoad = () => {
    const divElement = document.getElementById("divLoad");
    const heroImg = document.getElementById("imgLoad");

    divElement && divElement.classList.add("divAnimation");
    heroImg && heroImg.classList.add("heroimageAnimation");
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
      <h1
        id="black"
        className="text-[6.5rem] scale-x-90 font-generalsans-bold my-[-1rem] text-[#262626]"
      >
        HEY, I'M XINDIC
      </h1>
      <h1
        id="black"
        className="text-[6.5rem] scale-x-90 font-generalsans-bold text-stroke my-[-1rem]"
      >
        HEY, I'M XINDIC
      </h1>
      <h1
        id="black"
        className="text-[6.5rem] scale-x-90 font-generalsans-bold my-[-1rem] text-[#262626]"
      >
        HEY, I'M XINDIC
      </h1>
    </div>
  );
};
