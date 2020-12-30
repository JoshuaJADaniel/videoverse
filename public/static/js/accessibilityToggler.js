document.body.addEventListener("mousedown", function () {
  document.body.classList.add("using-mouse");
});

document.body.addEventListener("keydown", function () {
  document.body.classList.remove("using-mouse");
});
