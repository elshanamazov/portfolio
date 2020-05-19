// fake-placeholder
const formInputs = document.querySelectorAll(".form-field");

for (let item of formInputs) {
  const inputPlaceholder = item.nextElementSibling;

  item.addEventListener("click", function () {
    inputPlaceholder.classlist.add("active");
  });

  item.addEventListener("blur", function () {
    if (this.value == "") {
      inputPlaceholder.classlist.remove("active");
    }
  });
}
