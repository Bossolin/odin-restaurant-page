const Footer = (() => {
  const footer = document.createElement("footer");
  const footerDiv = document.createElement("div");
  footerDiv.classList.add("footer");
  footerDiv.innerText = "Case Inferno© 2021";

  footer.appendChild(footerDiv);
  return footer;
})();

export default Footer;
