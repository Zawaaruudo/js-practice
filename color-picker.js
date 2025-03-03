const colorInput = document.getElementById('colorPicked');
const colorText = document.getElementById('spanEl');
const copyButton = document.querySelector("button");
const randomButton = document.getElementById("random");
const rgbText = document.querySelectorAll("span")[1];

const hexToRgb = (hex) => {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
};

colorInput.addEventListener("input", () => {
  let color = colorInput.value;
  document.body.style.backgroundColor = color;
  colorText.textContent = color;
  rgbText.textContent = hexToRgb(color);
});


const getRandomColor = () => {
  let randomHex = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomHex.padEnd(7, "0");
};

randomButton.addEventListener("click", () => {
  let randomColor = getRandomColor();
  colorInput.value = randomColor;
  document.body.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
  rgbText.textContent = hexToRgb(randomColor);
});


colorInput.addEventListener("input", () => {
  let color = colorInput.value;
  document.body.style.backgroundColor = color;
  colorText.textContent = color;
});

copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(colorText.textContent);
  copyButton.textContent = "Copied!";
  setTimeout(() => (copyButton.textContent = "Copy"), 1000);
});
