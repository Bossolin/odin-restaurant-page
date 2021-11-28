import "./style.css";
import Header from "./Header";
import Footer from "./Footer";

const index = (() => {
  const body = document.querySelector("body");
  const content = document.createElement("div");
  content.setAttribute("id", "content");

  content.appendChild(Header);
  content.appendChild(Footer);
  body.appendChild(content);
})();
