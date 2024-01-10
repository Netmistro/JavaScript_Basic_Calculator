// Constants
const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else if (buttonValue === "DEL") {
      deleteLastValue(inputFieldEl);
    } else {
      appendValue(buttonValue);
    }
  });
}

// Functions
// Clear the result element
function clearResult() {
  inputFieldEl.value = "";
}

// Calculate the result
function calculateResult() {
  inputFieldEl.value = eval(inputFieldEl.value);
}

// Append the value to the result element
function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
}

// Delete last operation ot number
function deleteLastValue(inputFieldEl) {
  inputFieldEl.value = inputFieldEl.value.slice(0, -1);
}
