const billInput = prompt("Enter the bill subtotal (e.g. 100):");
const tipInput = prompt("Enter the tip percentage (e.g. 15):");

const subtotal = Number(billInput);
const tipPercentage = Number(tipInput);

if (
  billInput === null || tipInput === null ||
  billInput.trim() === "" || tipInput.trim() === "" ||
  !Number.isFinite(subtotal) || !Number.isFinite(tipPercentage) ||
  subtotal < 0 || tipPercentage < 0
) {
  console.log("Invalid input. Please enter non-negative numbers.");
} else {
  const calculatedTip = subtotal * tipPercentage / 100;
  let total = subtotal;
  total += calculatedTip; // assignment operator

  console.log(`Subtotal: $${subtotal}`);
  console.log(`Tip Percentage: ${tipPercentage}%`);
  console.log(`Calculated Tip: $${calculatedTip}`);
  console.log(`Total Amount to Pay: $${total}`);
}