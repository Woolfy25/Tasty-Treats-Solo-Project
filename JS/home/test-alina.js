(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[ratig-modal-open]"),
    closeModalBtn: document.querySelector("[ratig-modal-close]"),
    modal: document.querySelector("[ratig-modal]"),
  };
  refs.openModalBtn.forEach((el) => el.addEventListener("click", toggleModal));
  refs.closeModalBtn.addEventListener("click", toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

// script.js

// To access the stars
let stars = document.getElementsByClassName("star");
let output = document.getElementById("output");

// Funtion to update rating
function gfg(n) {
  remove();
  for (let i = 0; i < n; i++) {
    if (n == 1) cls = "one";
    else if (n == 2) cls = "two";
    else if (n == 3) cls = "three";
    else if (n == 4) cls = "four";
    else if (n == 5) cls = "five";
    stars[i].className = "star " + cls;
  }
  output.innerText = n + ".0";
}

// To remove the pre-applied styling
function remove() {
  let i = 0;
  while (i < 5) {
    stars[i].className = "star";
    i++;
  }
}
