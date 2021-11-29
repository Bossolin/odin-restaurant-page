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
    console.log(e.target.classList[0]);

    const page = e.target.classList[0];

    if (page == "home") {
      content.replaceChild(Main, content.childNodes[1]);
    } else if (page == "about") {
      content.replaceChild(About, content.childNodes[1]);
    }
  };

  homeLink.addEventListener("click", clickHandler);
  aboutLink.addEventListener("click", clickHandler);
})();
