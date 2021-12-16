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

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("burger-menu");

    const home = document.createElement("a");
    home.setAttribute("class", "home");
    home.innerText = "Home";
    home.href = "";
    const menu = document.createElement("a");
    menu.innerText = "Menu";
    menu.href = `http://www.casainferno.no/files/000-CURRENT%20MENU.pdf`;
    const about = document.createElement("a");
    about.setAttribute("class", "about");
    about.innerText = "About";
    about.href = "";

    menuDiv.appendChild(home);
    menuDiv.appendChild(menu);
    menuDiv.appendChild(about);

    hamburger.appendChild(menuDiv);
    headerMenu.appendChild(hamburger);

    headerMenu.addEventListener("click", () => {
      menuDiv.classList.toggle("active");
    });
  };

  return { hamIcon };
})();

export default Hamburger;
