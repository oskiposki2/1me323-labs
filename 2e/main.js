const productdiv = document.getElementById("Product")
const hidediv = document.querySelector("#hide")
const toggleBtn = document.querySelector("#togglebtn")

const score = Math.floor(Math.random() * 101)

const result = score >= 50 ? "Godkänt" : "Underkänt"

console.log(result)

console.log(`Siffra: ${score} Resultat: ${result}`)

const product = {
  name: "Trådlösa hörlurar",
  price: 899,
  inStock: true
};

function createProductCard(product) {
  return `
    <h2>Produktinfo</h2>
    <div class="product-card ${product.inStock ? '' : 'out-of-stock'}">
      <h3>${product.name}</h3>
      <p class="price">${product.price} kr</p>
      <span class="stock ${product.inStock ? 'in-stock' : 'sold-out'}">
        ${product.inStock ? 'I lager' : 'Slut i lager'}
      </span>
    </div>
  `;
}

productdiv.innerHTML = createProductCard(product)
let isVisible = false;
toggleBtn.addEventListener("click", function() {
    isVisible = !isVisible
    hidediv.style.display = isVisible ? `block` : `none`
    toggleBtn.textContent = isVisible ? `Visa mindre` : `Visa mer`
})