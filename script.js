const love = document.querySelector(".love");
const count = document.querySelector("#times");

let clickTime = 0;
let timesClicked = 0;

love.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.left = `${xInside}px`;
  heart.style.top = `${yInside}px`;

  love.appendChild(heart);

  count.innerHTML = ++timesClicked;

  setTimeout(() => heart.remove(), 3000);
};
