let num = document.getElementById("count-el");
let incBtn = document.getElementById("increment-btn");
let decBtn = document.getElementById("decrement-btn");
let input = document.getElementById("input");
input.placeholder = "Enter Number";

incBtn.addEventListener("click", function () {
  if (input.value >= 0 && input.value !== "") {
    num.textContent = parseInt(num.textContent) + parseInt(input.value) - 1;
  }
  num.textContent++;
  input.value = null;
});
decBtn.addEventListener("click", function () {
  if (input.value >= 0 && input.value !== "") {
    num.textContent = parseInt(num.textContent) - parseInt(input.value) + 1;
  }
  num.innerHTML--;
  input.value = null;
});
