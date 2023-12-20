import { useCallback, useEffect, useRef } from "react";
import { MouseEvent } from "react";

export const Trailer = () => {
  const trailerRef = useRef<HTMLElement | null>(null);

  const animateTrailer = useCallback((e: MouseEvent, interacting: boolean) => {
    const trailer = trailerRef.current;

    if (trailer) {
      const x = e.clientX - trailer.offsetWidth / 2;
      const y = e.clientY - trailer.offsetHeight / 2;

      const keyframes = [
        {
          transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`,
        },
      ];

      trailer.animate(keyframes, {
        duration: 800,
        fill: "forwards",
      });
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: any) => {
      const interactable = e.target.closest(".interactable");
      const interacting = interactable !== null;

      animateTrailer(e, interacting);

      const trailer = trailerRef.current;
      if (trailer) {
        trailer.dataset.type = interacting ? interactable.dataset.type : "";
      }
    },
    [animateTrailer]
  );

  useEffect(() => {
    trailerRef.current = document.getElementById("trailer");

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return <div id="trailer"></div>;
};
