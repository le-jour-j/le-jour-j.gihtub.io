const FANTOMESPEED = 100;

/**
 * @param {HTMLElement} element
 */
function initBouncingFantome(element) {
  if (!element) return;

  const { width, height } = element.getBoundingClientRect();
  let fantomeX = Math.random() * (window.innerWidth - width);
  let fantomeY = Math.random() * (window.innerHeight - height);
  let dirX = 1;
  let dirY = 1;

  let lastTime;

  function updateFantome(time) {
    const { width, height } = element.getBoundingClientRect();
    const deltaTime = (lastTime ? time - lastTime : 0) / 1000;
    lastTime = time;

    if (dirX < 0 && fantomeX < 0) dirX = 1;
    else if (dirX > 0 && fantomeX > window.innerWidth - width) dirX = -1;
    if (dirY < 0 && fantomeY < 0) dirY = 1;
    else if (dirY > 0 && fantomeY > window.innerHeight - height) dirY = -1;

    fantomeX += FANTOMESPEED * deltaTime * dirX;
    fantomeY += FANTOMESPEED * deltaTime * dirY;

    element.style.setProperty("left", fantomeX + "px");
    element.style.setProperty("top", fantomeY + "px");
    requestAnimationFrame(updateFantome);
  }

  requestAnimationFrame(updateFantome);
}

const bouncingElements = Array.from(document.querySelectorAll(".bouncing"));

bouncingElements.forEach((el) => {
  initBouncingFantome(el);
});
