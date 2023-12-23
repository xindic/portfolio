import { useEffect } from "react";

export const Nav = () => {
  useEffect(() => {
    const scrollTopButton = document.querySelector(".scroll-top");
    const scrollBottomButton = document.querySelector(".scroll-bottom");

    const scrollToTop = () => {
      console.log("top");
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };

    const scrollToBottom = () => {
      console.log("bottom");
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    };

    scrollTopButton?.addEventListener("click", scrollToTop);
    scrollBottomButton?.addEventListener("click", scrollToBottom);

    return () => {
      scrollTopButton?.removeEventListener("click", scrollToTop);
      scrollBottomButton?.removeEventListener("click", scrollToBottom);
    };
  }, []);

  return (
    <div
      id="white"
      className="flex items-center fixed w-full h-[3rem] z-10 bg-[#FAFAF9]"
    >
      <button
        id="black"
        className="font-generalsans-semibold text-[1.5rem] mx-5 scroll-top"
      >
        xindic
      </button>
      <button
        id="blackButton"
        className="bg-[#262626] ml-auto mx-5 w-[6rem] h-[2rem] rounded-[2rem] font-generalsans-medium text-[#FAFAF9] text-[0.9rem] scroll-bottom"
      >
        Let's Talk
      </button>
    </div>
  );
};
