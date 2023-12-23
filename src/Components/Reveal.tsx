export const Reveal = () => {
  window.addEventListener("scroll", () => {
    const reveals = document.querySelectorAll(".text-scroll");

    for (let i = 0; i < reveals.length; i++) {
      const windowheight = window.innerHeight;
      const revealtop = reveals[i].getBoundingClientRect().top;
      const revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add("textAnimation");
      }
    }
  });

  return <></>;
};
