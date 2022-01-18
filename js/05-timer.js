import countDownTimer from './countDownTimer.js';

const refs = {
  startEl: document.querySelector('[data-action="start"]'),
  stopEl: document.querySelector('[data-action="stop"]'),
};

const { startEl, stopEl } = refs;

const timer = new countDownTimer({
  selector: '#timer-1',
});

startEl.addEventListener('click', timer.start.bind(timer));
stopEl.addEventListener('click', timer.stop.bind(timer));
