// Переменные
const bodyEl = document.querySelector('body')
const colorEl = document.querySelector('.color')
const changeColorEl = document.querySelector('.change-color')

// Функции
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const fnChangeColorEl = function () {
  const newColor = getRandomHexColor()
  bodyEl.style.backgroundColor = newColor
  colorEl.textContent = newColor
}

// Слушатели событий
changeColorEl.addEventListener('click', fnChangeColorEl)
