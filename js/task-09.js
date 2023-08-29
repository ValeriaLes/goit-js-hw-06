function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBtn = document.querySelector('.change-color');
const colorText = document.querySelector('.color')
const bodyColor = document.querySelector('body')

const colorChange = function () {
const bodyBgColor = getRandomHexColor()

bodyColor.style.backgroundColor= getRandomHexColor();
colorText.textContent = bodyBgColor;

}

colorBtn.addEventListener('click', colorChange)