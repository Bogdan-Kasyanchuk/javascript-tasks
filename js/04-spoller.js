const dataSpollers = document.querySelector('[data-spollers]');

const spoller = event => {
  event.preventDefault();
  const isActive = document.querySelector('._active');
  if (isActive) {
    isActive.classList.toggle('_active');
    isActive.nextElementSibling.classList.toggle('_hidden');
    if (event.target === isActive) {
      return;
    }
  }
  event.target.classList.toggle('_active');
  event.target.nextElementSibling.classList.toggle('_hidden');
};

dataSpollers.addEventListener('click', spoller);
