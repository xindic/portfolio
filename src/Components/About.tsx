export const About = () => {
  return (
    <div
      id="white"
      className="h-screen w-auto bg-[#FAFAF9] flex flex-col items-top justify-center space-y-10"
    >
      <div className="overflow-hidden h-[14vh] flex justify-center items-center">
        <h3 className="text-[#8C8C73] font-generalsans-semibold text-center text-scroll text-[6rem]">
          ABOUT ME
        </h3>
      </div>
      <div className="h-screen w-auto flex flex-row justify-center items-top">
        <div className="bg-blue-300 h-[80vh] w-[60vh] rounded-xl overflow-hidden">
          <img
            alt="About Me"
            className="object-fill"
            src="https://images.unsplash.com/photo-1614186857434-a93ad53aa137?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></img>
        </div>
        <div className="h-[33vh] w-[80vh] ml-[2vh] flex flex-col items-start sticky top-[5vh]">
          <h5
            id="black"
            className="font-generalsans-semibold text-[1.5rem] text-left"
          >
            A brief intro, who am I?
          </h5>
          <p id="black" className="font-generalsans-medium text-left">
            I am an independent fullstack developer based in Pakistan.
          </p>
          <br></br>
          <p id="black" className="font-generalsans-medium text-left">
            With over a year of experience, I specialize in scripting and UI
            design. I tend to write clean and readable code, allowing others to
            easily interpret my thoughts. My modular approach makes it simple to
            add new features or make changes without disrupting the entire
            workflow. Frameworks which I use for most of my projects include
            Knit and Rojo.
          </p>
          <br></br>
          <p id="black" className="font-generalsans-medium text-left">
            While UI design isn't my primary focus, I enjoy doing it is a hobby.
            I love minimal and clean aesthetic which can be seen through most of
            my designs and also reflects my personality.
          </p>
        </div>
      </div>
    </div>
  );
};
