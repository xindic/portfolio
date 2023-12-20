import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const animateElements = (tl: any, trigger: any) => {
  tl.to(
    "#white",
    {
      backgroundColor: "#0E0E0C",
      duration: 0.5,
    },
    0
  );

  tl.to(
    "#black",
    {
      color: "#FAFAF9",
      duration: 0.5,
    },
    0
  );

  tl.to(
    "#blackButton",
    {
      backgroundColor: "#FAFAF9",
      color: "#0E0E0C",
      duration: 0.5,
    },
    0
  );

  // Use the passed tl parameter for ScrollTrigger
  ScrollTrigger.create({
    trigger,
    start: "top center",
    end: "bottom center",
    scrub: false,
    markers: false,
    toggleActions: "play reverse play reverse",
    animation: tl, // Pass the timeline to ScrollTrigger
  });
};

export const Scroll = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    animateElements(tl, "#info");

    const tl2 = gsap.timeline();
    animateElements(tl2, "#projects");
  }, []); // Empty dependency array ensures the effect runs once on mount

  return <></>;
};
