// GET HOLD OF BUTTOM
const toggle = document.querySelector(".hamburger-menu");
const modal = document.getElementById("modal");

toggle.addEventListener("click", () => {
  if (toggle.classList.value === "hamburger-menu") {
    toggle.classList.value = "close-menu";
    modal.classList.remove("show-modal");
  } else if (toggle.classList.value === "close-menu") {
    toggle.classList.value = "hamburger-menu";
    modal.classList.add("show-modal");
  }
});
