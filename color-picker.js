const colorInput = document.getElementById('colorPicked');
const colorText = document.getElementById('spanEl');
colorInput.addEventListener("input", () => {
  let color = colorInput.value;
  document.body.style.backgroundColor = color;
  colorText.textContent = color;
});