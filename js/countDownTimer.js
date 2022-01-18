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
    this.targetDateEl = document.querySelector('[data-target="target"]');
    this.inputDateEl = this.selectorEL.querySelector('[data-input="input"]');
    this.targetDate = null;
    this.timerId = null;
  }

  start() {
    this.targetDate = new Date(this.inputDateEl.value);
    this.timerId = setInterval(() => {
      this.targetDateValues();

      const days = this.pad(Math.floor((this.targetDate - new Date()) / (1000 * 60 * 60 * 24)));
      const hours = this.pad(
        Math.floor(((this.targetDate - new Date()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      const mins = this.pad(
        Math.floor(((this.targetDate - new Date()) % (1000 * 60 * 60)) / (1000 * 60)),
      );
      const secs = this.pad(Math.floor(((this.targetDate - new Date()) % (1000 * 60)) / 1000));
      this.timeValues(days, hours, mins, secs);
      this.labelValues();
    }, 1000);
  }

  stop() {
    clearInterval(this.timerId);
    this.clearMurkup();
  }

  timeValues(days, hours, mins, secs) {
    this.daysEl.textContent = days;
    this.hoursEl.textContent = hours;
    this.minsEl.textContent = mins;
    this.secsEl.textContent = secs;
  }

  labelValues() {
    Number(this.daysEl.textContent) === 1
      ? (this.daysLabelEl.textContent = 'DAY')
      : (this.daysLabelEl.textContent = 'DAYS');

    Number(this.hoursEl.textContent) === 1
      ? (this.hoursLabelEl.textContent = 'HOUR')
      : (this.hoursLabelEl.textContent = 'HOURS');

    Number(this.minsEl.textContent) === 1
      ? (this.minsLabelEl.textContent = 'MINUTE')
      : (this.minsLabelEl.textContent = 'MINUTES');

    Number(this.secsEl.textContent) === 1
      ? (this.secsLabelEl.textContent = 'SECOND')
      : (this.secsLabelEl.textContent = 'SECONDS');
  }

  targetDateValues() {
    this.targetDateEl.textContent = this.targetDate.toLocaleString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
    this.targetDateEl.classList.add('target-date-show-value');
  }

  clearMurkup() {
    this.daysEl.textContent = '00';
    this.hoursEl.textContent = '00';
    this.minsEl.textContent = '00';
    this.secsEl.textContent = '00';
    this.targetDateEl.textContent = '. . .';
    this.targetDateEl.classList.remove('target-date-show-value');
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}
