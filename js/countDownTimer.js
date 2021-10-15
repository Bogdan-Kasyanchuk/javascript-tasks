export default class CountdownTimer {
  constructor({ selector }) {
    this.selectorEL = document.querySelector(selector);
    this.daysEl = this.selectorEL.querySelector('[data-value="days"]');
    this.hoursEl = this.selectorEL.querySelector('[data-value="hours"]');
    this.minsEl = this.selectorEL.querySelector('[data-value="mins"]');
    this.secsEl = this.selectorEL.querySelector('[data-value="secs"]');
    this.daysLabelEl = this.selectorEL.querySelector('[data-label="days"]');
    this.hoursLabelEl = this.selectorEL.querySelector('[data-label="hours"]');
    this.minsLabelEl = this.selectorEL.querySelector('[data-label="mins"]');
    this.secsLabelEl = this.selectorEL.querySelector('[data-label="secs"]');
    this.targetDateEl = document.querySelector('.target-date-show');
    this.dateEl = this.selectorEL.querySelector('[data-input="date"]');
    this.targetDate = null;
    this.timerId = null;
  }

  start() {
    this.targetDate = new Date(this.dateEl.value);
    this.timerId = setInterval(() => {
      const currentTime = new Date();
      const timeLeft = this.targetDate - currentTime;
      this.targetDateValues();

      const days = this.pad(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
      const hours = this.pad(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = this.pad(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.pad(Math.floor((timeLeft % (1000 * 60)) / 1000));
      this.timeValues(days, hours, mins, secs);
      this.labelValues();
    }, 1000);
  }

  stop() {
    clearInterval(this.timerId);
    this.clearMurkup();
    this.dateEl.value = '';
  }

  timeValues(days, hours, mins, secs) {
    this.daysEl.textContent = days;
    this.hoursEl.textContent = hours;
    this.minsEl.textContent = mins;
    this.secsEl.textContent = secs;
  }

  labelValues() {
    if (Number(this.daysEl.textContent) === 1) {
      this.daysLabelEl.textContent = 'Day';
    } else {
      this.daysLabelEl.textContent = 'Days';
    }

    if (Number(this.hoursEl.textContent) === 1) {
      this.hoursLabelEl.textContent = 'Hour';
    } else {
      this.hoursLabelEl.textContent = 'Hours';
    }

    if (Number(this.minsEl.textContent) === 1) {
      this.minsLabelEl.textContent = 'Minute';
    } else {
      this.minsLabelEl.textContent = 'Minutes';
    }

    if (Number(this.secsEl.textContent) === 1) {
      this.secsLabelEl.textContent = 'Second';
    } else {
      this.secsLabelEl.textContent = 'Seconds';
    }
  }

  targetDateValues() {
    this.targetDateEl.textContent = this.targetDate.toDateString();
  }

  clearMurkup() {
    this.daysEl.textContent = '00';
    this.hoursEl.textContent = '00';
    this.minsEl.textContent = '00';
    this.secsEl.textContent = '00';
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}
