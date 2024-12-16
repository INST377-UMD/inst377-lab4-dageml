function handleAlert(event) {
  event.preventDefault(); // Prevent form submission
  const name = document.getElementById("name").value;
  alert(`Hi ${name}!`);
}

const isBlue = true;
function toggleBackgroundColor() {
  const newColor = isBlue ? "green" : "blue";
  document.body.style.backgroundColor = newColor;
  isBlue = !isBlue;
}

function validateText(event) {
  event.preventDefault(); // Prevent form submission
  const text = document.getElementById("text-input").value;
  const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  if (validation.test(text)) {
    alert("The text contains special characters!");
  } else {
    alert("The text is valid and contains no special characters.");
  }
}

function addText() {
  const heading = document.getElementById("main-heading");
  heading.textContent += " Add Text";
}
