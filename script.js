const dvdLogo = document.getElementById('dvd-box');
const colors = [
  'red',
  'green',
  'blue',
  'orange',
  'blueviolet',
  'aquamarine',
  'deeppink',
  'chartreuse',
  'yellow',
  'cornflowerblue',
  'tomato',
  'aqua',
  'greenyellow',
];

function getAdjustedRanges() {
  let hRange = window.innerWidth - dvdLogo.clientWidth;
  let vRange = window.innerHeight - dvdLogo.clientHeight;

  const step = 20;
  hRange = Math.max(step, Math.floor(hRange / step) * step);
  vRange = Math.max(step, Math.floor(vRange / step) * step);

  return { hRange, vRange };
}

function looping() {
  const { hRange, vRange } = getAdjustedRanges();

  const time = performance.now() * 0.2;

  const x = Math.abs((time % (hRange * 2)) - hRange);
  const y = Math.abs((time % (vRange * 2)) - vRange);

  dvdLogo.style.transform = `translate3d(${x}px, ${y}px, 0)`;

  const bounces = Math.floor(time / hRange) + Math.floor(time / vRange);

  dvdLogo.style.color = colors[bounces % colors.length];

  requestAnimationFrame(looping);
}

looping();
