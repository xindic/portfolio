export const trailer = () => {
  const trailer = document.getElementById("trailer");

  window.onmousemove = (e) => {
    if (trailer) {
      const x = e.clientX - trailer.offsetWidth / 2;
      const y = e.clientY - trailer.offsetHeight / 2;

      const keyframes = {};
      transform: `translate(${x}px, ${y}px)`;

      trailer.animate(keyframes, {
        duration: 800,
        fill: "forwards",
      });
    }
  };
  return <div>trailer</div>;
};
