const input = document.querySelector(".check__email");
const input2 = document.querySelector(".input__check--footer");
console.log(input2);
const emailReg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function onInput() {
  if (isEmailValid(input.value)) {
    input.style.borderColor = "green";
  } else {
    input.style.borderColor = "red";
  }
}
function onInput_two() {
  if (isEmailValid(input2.value)) {
    input2.style.borderColor = "green";
  } else {
    input2.style.borderColor = "red";
  }
}

input.addEventListener("input", onInput);
input2.addEventListener("input", onInput_two);

function isEmailValid(value) {
  return emailReg.test(value);
}
