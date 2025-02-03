const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const options = { hour: "numeric", minute: "numeric", hour12: false };
  clock.innerText = date.toLocaleTimeString("en-US", options);
}

getClock();
setInterval(getClock, 1000);
