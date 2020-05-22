// fake-placeholder
const formInputs = document.querySelectorAll(".form-field");

for (let item of formInputs) {
  const inputPlaceholder = item.nextElementSibling;

  item.addEventListener("click", function () {
    inputPlaceholder.classList.add("active");
  });

  item.addEventListener("blur", function () {
    if (this.value == "") {
      inputPlaceholder.classList.remove("active");
    }
  });
}

// Right-menu

const MobileMenuToggle = document.querySelector(".toggle-menu");
const mobMenu = document.querySelector(".header-wrapper__nav");
const overlay = document.querySelector("#overlay");

MobileMenuToggle.addEventListener("click", function () {
  mobMenu.classList.toggle("active");
  this.classList.toggle("active");
  overlay.classList.toggle("active");
});

window.addEventListener("resize", function () {
  mobMenu.classList.remove("active");
  MobileMenuToggle.classList.remove("active");
  overlay.classList.remove("active");
});
