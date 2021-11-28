import logo1 from "../img/casa_logo_1.png";
import logo2 from "../img/casa_logo_2.png";

const header = (() => {
  const header = document.createElement("header");

  const headerLogo = (() => {
    const headerLogo = document.createElement("div");
    headerLogo.classList.add("header-logo");

    const img = document.createElement("img");
    img.src = logo1;
    headerLogo.appendChild(img);

    return headerLogo;
  })();

  const headerMain = (() => {
    const headerMain = document.createElement("div");
    headerMain.classList.add("header-main");

    const img = document.createElement("img");
    console.log(logo2);
    img.src = logo2;
    headerMain.appendChild(img);

    return headerMain;
  })();

  const headerMenu = (() => {
    const headerMenu = document.createElement("div");
    headerMenu.classList.add("header-menu");

    const menu = document.createElement("a");
    menu.innerText = "Menu";
    const about = document.createElement("a");
    about.innerText = "About";

    headerMenu.appendChild(menu);
    headerMenu.appendChild(about);

    return headerMenu;
  })();

  header.appendChild(headerLogo);
  header.appendChild(headerMain);
  header.appendChild(headerMenu);

  return header;
})();

export default header;
