const wrapper = document.querySelector(".wrapper");
const quetion = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  quetion.innerHTML = "Aaaaaa, I like you too";
  gif.src =
    "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

noBtn.addEventListener("click", () => {

  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;


  const randomX = Math.floor(Math.random() * (maxX + 1)); // Ensure it stays within bounds
  const randomY = Math.floor(Math.random() * (maxY + 1)); // Ensure it stays within bounds


  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
  noBtn.style.display = "none"; // Hide the button after clicking
  setTimeout(() => {
    noBtn.style.display = "block"; // Show the button again after a delay
  }, 1000); // Delay for 1 second

});
