const FANTOMESPEED = 100;

function initBouncingFantome() {
  const element = document.getElementById("fantome");
  if (!element) return;

  const screenWidth = innerWidth;
  const screenHeight = innerHeight;

  let fantomeX = 0;
  let fantomeY = 0;
  let dirX = 1;
  let dirY = 1;

  let lastTime;

  function updateFantome(time) {
    const { width, height } = element.getBoundingClientRect();
    const deltaTime = (lastTime ? time - lastTime : 0) / 1000;
    lastTime = time;

    if (fantomeX < 0 || fantomeX > window.innerWidth - width) dirX *= -1;
    if (fantomeY < 0 || fantomeY > window.innerHeight - height) dirY *= -1;

    fantomeX += FANTOMESPEED * deltaTime * dirX;
    fantomeY += FANTOMESPEED * deltaTime * dirY;

    element.style.setProperty("left", fantomeX + "px");
    element.style.setProperty("top", fantomeY + "px");
    requestAnimationFrame(updateFantome);
  }

  requestAnimationFrame(updateFantome);
}

initBouncingFantome();
