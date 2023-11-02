function timer({ clock, deadline }) {
  function getRemainingTimer(endtime) {
    let days, hours, minutes, seconds;
    const timer = Date.parse(endtime) - Date.parse(new Date());
    if (timer <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(timer / (1000 * 60 * 60 * 24));
      hours = Math.floor((timer / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((timer / (1000 * 60)) % 60);
      seconds = Math.floor((timer / 1000) % 60);
    }
    return { timer, days, hours, minutes, seconds };
  }
  function getZero(num){
    if (num < 10) {
        return `0${num}`
    }else{
        return num
    }
  }
  function setClock(selector, endtime) {
    const t = document.querySelector(selector),
      days = t.querySelector("#days"),
      hours = t.querySelector("#hours"),
      minutes = t.querySelector("#minutes"),
      seconds = t.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000)
    updateClock()
    function updateClock() {
      const timer = getRemainingTimer(endtime);
      days.textContent = getZero(timer.days)
      hours.textContent = getZero(timer.hours)
      minutes.textContent = getZero(timer.minutes)
      seconds.textContent = getZero(timer.seconds)
      if (timer.timer <= 0) {
        clearInterval(timeInterval)
      }
    }
  }
  setClock(clock, deadline)
}
export default timer