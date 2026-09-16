const openBtn = document.getElementById("openBtn");
const backBtn = document.getElementById("backBtn");
const letter = document.getElementById("letter");

openBtn.addEventListener("click", () => {
  openBtn.style.display = "none";
  letter.style.display = "block";
});

backBtn.addEventListener("click", () => {
  letter.style.display = "none";
  openBtn.style.display = "inline-block";
});
