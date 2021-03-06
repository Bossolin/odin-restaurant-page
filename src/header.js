import logo1 from "../img/casa_logo_1.png";
import logo2 from "../img/casa_logo_2.png";

const Header = (() => {
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
    img.src = logo2;
    headerMain.appendChild(img);

    return headerMain;
  })();

  const headerMenu = (() => {
    const headerMenu = document.createElement("div");
    headerMenu.classList.add("header-menu");

    return headerMenu;
  })();

  header.appendChild(headerLogo);
  header.appendChild(headerMain);
  header.appendChild(headerMenu);

  return header;
})();

export default Header;
