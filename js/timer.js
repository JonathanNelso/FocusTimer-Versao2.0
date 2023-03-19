export function Timer({
    minutesDisplay,
    secondsDisplay
}) {

  let timerTimerOut;
  let minutes = Number(minutesDisplay.textContent);

  function updateDisplay(newMinutes, seconds) {

    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function updateMinutes(minutes){
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
  }

  function countdown() {

    timerTimerOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;

      updateDisplay(minutes, 0);

      if (isFinished) {
        updateDisplay();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateDisplay(minutes, String(seconds - 1));

      countdown();
    }, 1000);
  }

  function pause() {
    clearTimeout(timerTimerOut)
  }

  function stop() {
    clearTimeout(timerTimerOut);
    updateDisplay(minutes, 0)
  }

  function moreFive() {
    minutes += 5
    updateMinutes(minutes)
  }

  function lessFive() {
    minutes -= 5
    updateMinutes(minutes)
  }

  return {
    updateDisplay,
    countdown,
    pause,
    stop,
    moreFive,
    lessFive
  }
}
