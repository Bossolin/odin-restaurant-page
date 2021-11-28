import "./style.css";
import header from "./header";

const index = (() => {
  const body = document.querySelector("body");
  const content = document.createElement("div");
  content.setAttribute("id", "content");

  content.appendChild(header);
  body.appendChild(content);
})();
