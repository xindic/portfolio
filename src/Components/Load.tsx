import { useEffect } from "react";

export const Load = () => {
  function disableScroll() {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";

    window.addEventListener("wheel", preventDefault, { passive: false });
  }

  function enableScroll() {
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.top = "";

    const scrollY = document.body.style.top;
    window.scrollTo(0, parseInt(scrollY || "0") * -1);

    window.removeEventListener("wheel", preventDefault);
  }

  function preventDefault(event: any) {
    event.preventDefault();
  }

  disableScroll();

  useEffect(() => {
    const loader = document.querySelector(".loader");

    const handleLoad = () => {
      if (loader) {
        loader.classList.add("loader--hidden");
        enableScroll();
      }
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return <div className="loader"></div>;
};
