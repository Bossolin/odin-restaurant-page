import "./style.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import About from "./About";

const index = (() => {
  const body = document.querySelector("body");
  const content = document.createElement("div");
  content.setAttribute("id", "content");

  content.appendChild(Header);
  content.appendChild(Main);
  content.appendChild(Footer);
  body.appendChild(content);

  const homeLink = document.querySelector(".home");
  const aboutLink = document.querySelector(".about");

  const clickHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  homeLink.addEventListener("click", clickHandler);
  aboutLink.addEventListener("click", clickHandler);
})();
