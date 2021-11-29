const About = (() => {
  const about = document.createElement("main");

  const adresse = document.createElement("h1");
  adresse.innerHTML = `ADRESSE`;

  const adressLink = document.createElement("a");
  adressLink.innerHTML = `<a href="https://www.google.no/maps/place/Vestregata+2,+9008+Troms%C3%B8/@69.6485703,18.950919,17z/data=!3m1!4b1!4m2!3m1!1s0x45c4c5ad3e002d9b:0xdf878a8fdd1e6364" target="new">Vestregata 2, Tromsø</a>`;

  const orderTitle = document.createElement("h1");
  orderTitle.innerText = `BORDBESTILLING / TAKE-AWAY`;

  const phoneNumber = document.createElement("h2");
  phoneNumber.innerText = `77 68 09 95`;

  const contactEmail = document.createElement("p");
  contactEmail.innerHTML = `<p>Rask takeaway ved oppmøte.<br>Øvrige henvendelser: send mail til <a href="mailto:post@casainferno.no">post@casainferno.no</a></p>`;

  const openingHours = document.createElement("p");
  openingHours.innerHTML = `&nbsp;<br />
  <strong>OPEN EVERY DAY</strong><br />
  Man-Ons: 16.00-22.00<br />
  Tor-Lør: 16.00-23.00<br />
  Søndag: 16.00-22.00<br />
  <br />
  Our <strong>TAKE-AWAY </strong>service keeps running as normal.<br />
  <strong>77680995</strong><strong> to pick up.</strong>`;

  about.appendChild(adresse);
  about.appendChild(adressLink);
  about.appendChild(orderTitle);
  about.appendChild(phoneNumber);
  about.appendChild(contactEmail);
  about.appendChild(openingHours);

  return about;
})();

export default About;
