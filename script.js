const p = document.getElementById("paragraph1");
const b = document.getElementById("button1");
const time = document.getElementById("time")

let clicks = 0;
let timerStarted = false;

b.addEventListener("click", handleClick);

function handleClick() {
  clicks++;
  p.textContent = "Your Current Click is: " + clicks;

  if (!timerStarted) {
    timerStarted = true;
    setTimeout(function() {
      b.removeEventListener("click", handleClick);
      let cps = Math.floor(clicks / 15);
      alert("Your CPS is around: " + cps);
      location.reload();
    }, 15000);
  }
}


