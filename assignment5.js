function rectangleArea(length = 5, width = 4) {
  return length * width;
}

const rectangleAreaArrow = (length = 5, width = 4) => length * width;

console.log(`Standard Function Area (Default 5x4): ${rectangleArea()}`);
console.log(`Arrow Function Area (Custom 10x3): ${rectangleAreaArrow(10, 3)}`);

try {
  {
    let blockVar = "I only exist inside this block";
    console.log(`Inside block: ${blockVar}`);
  }
  console.log(blockVar); // intentionally demonstrates block scope
} catch (error) {
  console.log(`Scope Test Error: ${error.name}: blockVar is not defined (when accessed outside block)`);
}