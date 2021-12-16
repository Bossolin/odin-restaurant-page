import Hamburger from "./Hamburger";
import Listeners from "./Listeners";

const Menu = () => {
  const headerMenu = document.querySelector(".header-menu");
  const mobile = window.matchMedia("(max-width: 500px)");

  const renderComputer = () => {
    while (headerMenu.lastChild) {
      headerMenu.lastChild.remove();
    }
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

    headerMenu.appendChild(home);
    headerMenu.appendChild(menu);
    headerMenu.appendChild(about);

    Listeners();
  };

  const renderMobile = () => {
    while (headerMenu.lastChild) {
      headerMenu.lastChild.remove();
    }

    Hamburger.hamIcon();

    // Listeners();
  };

  const updateMedia = () => {
    mobile.matches ? renderMobile() : renderComputer();
  };

  updateMedia();

  mobile.addEventListener("change", updateMedia);
};

export default Menu;
