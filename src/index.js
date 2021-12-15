import "./style.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Menu from "./Menu";

const index = (() => {
  const body = document.querySelector("body");
  const content = document.createElement("div");
  content.setAttribute("id", "content");

  content.appendChild(Header);
  content.appendChild(Main);
  content.appendChild(Footer);
  body.appendChild(content);
  Menu();
})();
