import { MouseEvent } from "react";

export const Trailer = () => {
  const trailer = document.getElementById("trailer");

  const animateTrailer = (e: MouseEvent, interacting: any) => {
    if (trailer) {
      const x = e.clientX - trailer.offsetWidth / 2;
      const y = e.clientY - trailer.offsetHeight / 2;

      const keyframes = {};
      transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`;

      trailer.animate(keyframes, {
        duration: 800,
        fill: "forwards",
      });
    }

    window.onmousemove = (e: any) => {
      const interactable = e.target.closest(".interactable");
      const interacting = interactable !== null;

      animateTrailer(e, interacting);

      if (trailer) {
        trailer.dataset.type = interacting ? interactable.dataset.type : "";
      }
    };
  };
  return <div id="trailer">trailer</div>;
};
