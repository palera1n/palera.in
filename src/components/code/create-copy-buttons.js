let blocks = document.querySelectorAll('pre');

blocks.forEach((block) => {
  let button = document.createElement('copy-code-button');
  block.appendChild(button);
});