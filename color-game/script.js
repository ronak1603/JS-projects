function randColorNum() {
  return Math.floor(Math.random() * 256);
}

function randomRGB() {
  return `rgb(${randColorNum()}, ${randColorNum()}, ${randColorNum()})`;
}

function generateColors() {
  const colors = [];
  for (let i = 0; i < 6; i++) {
    colors[i] = randomRGB();
  }
  return colors;
}

function showBgColor() {
  let colors = generateColors();
  var randomColorIndex = Math.floor(Math.random() * colors.length);
  const navValue = document.querySelector(".rgb-value");
  navValue.textContent = colors[randomColorIndex];
  const boxes = document.querySelectorAll(".color-div");

  colors.forEach((color, index) => {
    boxes[index].style.backgroundColor = color;

    boxes[index].addEventListener("click", () => {
      if (color === navValue.textContent) {
        for (let i = 0; i < boxes.length; i++) {
          boxes[i].style.backgroundColor = navValue.textContent;
          navValue.style.backgroundColor = navValue.textContent;
        }
      } else {
        boxes[index].style.backgroundColor = "black";
      }
    });
  });
}

const resetbutton = document.querySelector(".reset");

resetbutton.addEventListener("click", () => {
  let colors = generateColors();

  var randomColorIndex = Math.floor(Math.random() * colors.length);

  const navValue = document.querySelector(".rgb-value");
  navValue.style.backgroundColor = "white";
  navValue.textContent = colors[randomColorIndex];
  const boxes = document.querySelectorAll(".color-div");
  colors.forEach((color, index) => {
    boxes[index].style.backgroundColor = color;

    boxes[index].addEventListener("click", () => {
      if (color === navValue.textContent) {
        for (let i = 0; i < boxes.length; i++) {
          boxes[i].style.backgroundColor = navValue.textContent;
          navValue.style.backgroundColor = navValue.textContent;
        }
      } else {
        boxes[index].style.backgroundColor = "black";
      }
    });
  });
});

showBgColor();
