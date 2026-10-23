console.log("--- Initializing Inventory System ---");

const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

let productName = prompt('Enter a new product name (example: Monitor):');
let productPriceInput = prompt("Enter the product price (example: 150):");

if (productName === null || productPriceInput === null ||
    productName.trim() === "" || productPriceInput.trim() === "") {
  console.log("Input cancelled or missing. No new product was added.");
} else {
  const productPrice = Number(productPriceInput);

  if (!Number.isFinite(productPrice) || productPrice < 0) {
    console.log("Invalid price. Please enter a valid non-negative number.");
  } else {
    inventory.push({ name: productName.trim(), price: productPrice });
  }
}

// if...else validation and switch-based category assignment
function getCategory(price) {
  if (typeof price !== "number" || !Number.isFinite(price) || price < 0) {
    return "Invalid";
  }

  switch (true) {
    case price < 50:
      return "Budget";
    case price <= 200:
      return "Standard";
    default:
      return "Premium";
  }
}

// Regular function with local scope
function calculateTotal(items) {
  let total = 0;
  for (const item of items) {
    if (!item || typeof item.price !== "number" || item.price < 0) {
      continue; // ignore invalid records
    }
    total += item.price;
  }
  return total;
}

// Arrow function supports configurable tax and discount rates.
const calculateAdjustedTotal = (amount, taxRate = 0, discountRate = 0) => {
  const afterDiscount = amount - amount * (discountRate / 100);
  return afterDiscount + afterDiscount * (taxRate / 100);
};

console.log("\n--- Processing Inventory Roster (forEach) ---");
inventory.forEach(item => {
  console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${getCategory(item.price)}`);
});

console.log("\n--- Financial Analytics ---");
const totalValue = calculateTotal(inventory);
console.log(`Total Inventory Value: $${totalValue}`);

const affordableItems = inventory.filter(item => item.price < 200);
console.log(`Filtered Affordable Items (Under $200): ${JSON.stringify(affordableItems.map(item => item.name))}`);

const reportList = inventory.map(item => `${item.name.toUpperCase()}: $${item.price}`);
console.log(`Formatted Report List: ${JSON.stringify(reportList)}`);

// Demonstrate custom tax/discount parameters. These values are examples.
const adjustedTotal = calculateAdjustedTotal(totalValue, 8, 5);
console.log(`Total after 5% discount and 8% tax (example): $${adjustedTotal.toFixed(2)}`);
