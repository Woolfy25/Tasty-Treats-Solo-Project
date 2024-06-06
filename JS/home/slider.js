let counter = 0;

setInterval(function () {
  document.getElementById("slide" + counter);
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 3000);
