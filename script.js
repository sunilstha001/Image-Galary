let images = Array.from(document.querySelectorAll(".grid img"));
let hiddenBox = document.querySelector(".hiddenbox");
let hiddenBoxImg = document.getElementById("hiddenBoxImg");
let left = document.getElementById("left");
let right = document.getElementById("right");

let currentIndex = 0; 

function showImage(index) {
  hiddenBoxImg.src = images[index].src;
  currentIndex = index;
}

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    hiddenBox.style.display = "flex";
    showImage(index);
  });
});

left.addEventListener("click", () => {
  if (currentIndex > 0) {
    showImage(currentIndex - 1);
  }
});

right.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    showImage(currentIndex + 1);
  }
});

hiddenBox.addEventListener("click", (e) => {
  if (e.target === hiddenBox) {
    hiddenBox.style.display = "none";
  }
});