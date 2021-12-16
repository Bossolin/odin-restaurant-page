const Hamburger = (() => {
  const hamIcon = () => {
    const headerMenu = document.querySelector(".header-menu");
    const hamburger = document.createElement("div");
    hamburger.classList.add("burger");

    for (let i = 0; i < 3; i++) {
      const patty = document.createElement("div");
      patty.classList.add("patty");
      hamburger.appendChild(patty);
    }

    headerMenu.appendChild(hamburger);
  };

  return { hamIcon };
})();

export default Hamburger;
