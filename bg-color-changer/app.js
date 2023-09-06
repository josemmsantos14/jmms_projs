var div = document.querySelector(".geeks");

div.addEventListener("mousemove", function (e) {
  x = e.clientX * 0.415;
  y = e.clientY * 0.415;
  div.style.backgroundColor = `rgb(${x}, ${y}, ${x - y})`;
});
