const button = document.querySelector("#guessbutton");
const input = document.querySelector("#guessanumber");
const result = document.querySelector(".getarandomnumber");
const rightnumber = Math.floor(Math.random() * 101);
console.log(rightnumber);

button.addEventListener("click", () => {
  const numberguess = Number(input.value);

  if (numberguess === rightnumber) {
    result.textContent = "Du gættede rigtigt, du har vundet!";
    confetti();
  } else {
    result.textContent = "Desværre, det er ikke korret!";
  }
});
