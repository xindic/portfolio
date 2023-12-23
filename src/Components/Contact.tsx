export const Contact = () => {
  return (
    <div
      id="white"
      className="h-screen w-auto bg-[#FAFAF9] flex flex-col justify-top items-center space-y-10"
    >
      <div className="overflow-hidden h-[14vh] flex justify-center items-center">
        <h3 className="text-[#8C8C73] font-generalsans-semibold text-[7rem] text-center text-scroll text-reveal">
          Contact
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
          <form action="/contact" method="post">
            <input
              required
              type="text"
              id="name"
              name="name"
              className="w-full border-b border-gray-400 bg-transparent mt-10 focus:outline-none focus:ring-0"
              placeholder="Enter Name"
            ></input>
            <input
              required
              type="email"
              id="email"
              name="email"
              className="w-full border-b border-gray-400 bg-transparent mt-10 focus:outline-none focus:ring-0"
              placeholder="Enter Email"
            ></input>
            <textarea
              required
              id="message"
              name="message"
              rows={5}
              className="w-full border-b border-gray-400 bg-transparent mt-10 focus:outline-none focus:ring-0"
              placeholder="Your message"
            ></textarea>
            <button
              id="blackButton"
              type="submit"
              className="bg-[#262626] ml-auto mt-5 w-[8rem] h-[2.5rem] rounded-[2rem] font-generalsans-medium text-[#FAFAF9] text-[0.9rem]"
            >
              Send message
            </button>
          </form>
        </div>
        <div className="h-[86vh] w-[45vw] flex flex-col justify-top items-center space-y-3">
          <h4
            id="black"
            className="font-generalsans-semibold text-[2rem] text-left mt-[5vh]"
          >
            Contact Details
          </h4>
          <h5
            id="black"
            className="font-generalsans-medium text-[1rem] text-left"
          >
            hello@xindic.me
          </h5>
          <h4
            id="black"
            className="font-generalsans-semibold text-[2rem] text-left mb-[1rem]"
          >
            My digital spaces
          </h4>
          <div className="flex justify-center items-center">
            <i className="fa-brands fa-discord mx-2"></i>
            <button
              id="black"
              className="font-generalsans-medium text-[1rem] text-left"
            >
              Discord
            </button>
          </div>
          <div className="flex justify-center items-center">
            <i className="fa-brands fa-github mx-2"></i>
            <button
              id="black"
              className="font-generalsans-medium text-[1rem] text-left"
            >
              Github
            </button>
          </div>
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              className="mx-2"
            >
              <path
                fill="currentColor"
                d="M5.164 0L.16 18.928L18.836 24L23.84 5.072Zm8.747 15.354l-5.219-1.417l1.399-5.29l5.22 1.418z"
              />
            </svg>

            <button
              id="black"
              className="font-generalsans-medium text-[1rem] text-left"
            >
              Roblox
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
