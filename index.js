const texts = document.querySelectorAll(".question");
const buttons = document.querySelectorAll(".icon");
const answer = document.querySelectorAll(".answer");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (answer[index].style.display === "block") {
      button.classList.remove("rotate");
      answer[index].style.display = "none";
      texts[index].classList.remove("bold");
    } else {
      answer[index].style.display = "block";
      button.classList.add("rotate");
      texts[index].classList.add("bold");
    }
  });
});

texts.forEach((text, index) => {
  text.addEventListener("click", () => {
    if (answer[index].style.display === "block") {
      answer[index].style.display = "none";
      text.classList.remove("bold");
      buttons[index].classList.remove("rotate");
    } else {
      answer[index].style.display = "block";
      text.classList.add("bold");
      buttons[index].classList.add("rotate");
    }
  });
});