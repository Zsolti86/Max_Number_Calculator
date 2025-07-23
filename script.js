function findMax() {
  const a = document.getElementById("a").value.trim();
  const b = document.getElementById("b").value.trim();
  const c = document.getElementById("c").value.trim();

  const inputs = [a, b, c].filter((val) => val !== "").map(Number);

  const resultElement = document.getElementById("result");

  if (inputs.length === 0) {
    resultElement.textContent = "Please enter at least one number.";
    return;
  }

  if (inputs.some(isNaN)) {
    resultElement.textContent = "Please enter valid numbers only.";
    return;
  }

  const max = Math.max(...inputs);
  resultElement.textContent = `Maximum value: ${max}`;
}
