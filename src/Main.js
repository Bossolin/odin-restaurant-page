const Main = (() => {
  const main = document.createElement("main");

  const h1 = document.createElement("h1");
  h1.innerHTML = `Our opening times for <u>Christmas 2021</u> will be the following 🙂:`;

  const h2 = document.createElement("h2");
  h2.innerHTML = ` Wednesday...22.dec...OPEN 16:00-22:00<br />
  ..Thursday....23.dec....OPEN 16:00-23:00<br />
  .....Friday......24.dec............CLOSED......<br />
  ..Saturday.....25.dec............CLOSED......<br />
  ...Sunday......26.dec............CLOSED......<br />
  ...Monday......27.dec...OPEN 16:00-22:00<br />
  ..Tuesday......28.dec...OPEN 16:00-22:00<br />
  Wednesday...29.dec...OPEN 16:00-22:00<br />
  ..Thursday....30.dec....OPEN 16:00-22:00<br />
  .....Friday......31.jan............CLOSED......<br />
  ..Saturday....01.jan............CLOSED......<br />
  ...Sunday.....02.jan....OPEN 16:00-22:00`;

  const p1 = document.createElement("p");
  p1.innerHTML = `We are following the guidelines provided by
  <a
    href="https://www.tromso.kommune.no/alt-om-korona-i-tromsoe-corona-advice-and-info.6258629-110070.html"
    rel="noopener"
    target="_blank"
    >Tromsø Kommune</a
  >
  and working safely and cautiously to provide a long term solution for
  everyone to coexist in the best possible way with Covid-19.<br />
  To do so we will <strong>mainly</strong> accept
  <strong>bookings</strong> to try and reduce unexpected drop-ins. So
  give us a <strong>call to reserve your table</strong> or see if we
  have space available before coming by.`;

  const p2 = document.createElement("p");
  p2.innerHTML = `&nbsp;<br />
  <strong>OPEN EVERY DAY</strong><br />
  Man-Ons: 16.00-22.00<br />
  Tor-Lør: 16.00-23.00<br />
  Søndag: 16.00-22.00<br />
  <br />
  Our <strong>TAKE-AWAY </strong>service keeps running as normal.<br />
  <strong>77680995</strong><strong> to pick up.</strong>`;

  main.appendChild(h1);
  main.appendChild(h2);
  main.appendChild(p1);
  main.appendChild(p2);
  return main;
})();

export default Main;
