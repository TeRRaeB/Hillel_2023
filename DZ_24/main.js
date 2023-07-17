const input = document.getElementById("focusInput");
const div = document.getElementById("focusDiv");

input.addEventListener("focus", function () {
    div.style.display = "block";
});

input.addEventListener("blur", function () {
    div.style.display = "none";
});