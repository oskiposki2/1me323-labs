// const output = document.getElementById("output")

// // function parseJSON(jsonString) {
// //     try {
// //         const data = JSON.parse(jsonString);
// //         output.textContent = "Resultat: " + JSON.stringify(data);
// //     } catch (error) {
// //         output.textContent = "Fel: " + error.message;
// //     }
// // }

// // parseJSON('{"name": "Oskar"}')
// // parseJSON("detta är inte JSON")

// class Product {
//     #name
//     #price

//     constructor(name, price) {
//         this.#name = name;
//         this.#price = price;
//     }

//     get name() {
//         return this.#name;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(value) {
//         if(value < 0) {
//             throw new Error("Priset måste vara större än 0")
//         }
//     }
// }

// const errorMessage = document.querySelector("#error-message");

// function showError(message) {
//     errorMessage.textContent = message;
//     errorMessage.className = "error";
// }

// function showSucess(message) {
//     errorMessage.textContent = message;
//     errorMessage.className = "success";
// }

// function clearMessage() {
//     errorMessage.textContent = "";
//     errorMessage.className = "hidden";
// }

// const product = new Product("Tangentbord", 799);

// try {
//     product.price = -100
// } catch (error) {
//     clearMessage(error.message)
// }

// try {
//     product.price = 899;
//     clearMessage("Nytt pris: " + product.price)
// } catch (error) {
//     clearMessage(error.message)
// }

class Product {
  #name;
  #price;

  constructor(name, price) {
    const trimmedName = name?.trim();
    if (!trimmedName) {
      throw new Error("Produktnamnet får inte vara tomt.");
    }
    if (typeof price !== "number" || price < 0) {
      throw new Error("Priset måste vara ett positivt tal.");
    }
    this.#name = trimmedName;
    this.#price = price;
  }

  get name() { return this.#name; }
  get price() { return this.#price; }
}

const products = [];
const form = document.querySelector("#product-form");
const message = document.querySelector("#message");
const productList = document.querySelector("#product-list");

function showError(text) {
  message.textContent = text;
  message.className = "error";
}

function showSuccess(text) {
  message.textContent = text;
  message.className = "success";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#product-name").value;
  const price = Number(document.querySelector("#product-price").value);

  try {
    const product = new Product(name, price);
    products.push(product);
    showSuccess(`"${product.name}" tillagd!`);
    renderProducts();
    form.reset();
  } catch (error) {
    showError(error.message);
  }
});

function renderProducts() {
  productList.innerHTML = "";

  for (const product of products) {
    const li = document.createElement("li");
    li.textContent = `${product.name} — ${product.price} kr`;
    productList.appendChild(li);
  }
}