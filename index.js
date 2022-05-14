const countDownAll = document.querySelectorAll(".count-down__number");
const countDownYear = document.querySelector(".count-down__year");

let days;
let hours;
let minutes;
let seconds;
let currentYear;
let newYear;
let leftUntil;

function countDown() {
  countDownYear.innerHTML = new Date().getFullYear() + 1;
  currentYear = new Date();
  newYear = new Date(`Jan 1 ${currentYear.getFullYear() + 1} 00:00:00`);

  leftUntil = newYear - currentYear;

  days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
  hours = Math.floor((leftUntil / 1000 / 60 / 60) % 24);
  minutes = Math.floor((leftUntil / 1000 / 60) % 60);
  seconds = Math.floor((leftUntil / 1000) % 60);

  countDownAll[0].innerHTML = days;
  countDownAll[1].innerHTML = `${hours < 10 ? "0" + hours : hours}`;
  countDownAll[2].innerHTML = `${minutes < 10 ? "0" + minutes : minutes}`;
  countDownAll[3].innerHTML = `${seconds < 10 ? "0" + seconds : seconds}`;
}

countDown();

setInterval(countDown, 1000);
