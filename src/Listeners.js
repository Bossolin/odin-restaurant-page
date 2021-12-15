import About from "./About";
import Main from "./Main";

const Listeners = () => {
  const content = document.getElementById("content");
  const homeLink = document.querySelector(".home");
  const aboutLink = document.querySelector(".about");

  const clickHandler = (e) => {
    e.preventDefault();

    const page = e.target.classList[0];

    if (page == "home") {
      content.replaceChild(Main, content.childNodes[1]);
    } else if (page == "about") {
      content.replaceChild(About, content.childNodes[1]);
    }
  };

  homeLink.addEventListener("click", clickHandler);
  aboutLink.addEventListener("click", clickHandler);
};

export default Listeners;
