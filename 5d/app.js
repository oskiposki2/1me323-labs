function greet(name) {
  return `Hej ${name}!`;
}

console.log(greet("Världen"));

function farewell(name) {
  return `Hejdå ${name}!`;
}

console.log(farewell("Världen"));

function multiply(a, b) {
  return a + b; // Obs: detta är fel! Borde vara a * b
}

console.log(multiply(3, 4)); // Skriver ut 7 istället för 12