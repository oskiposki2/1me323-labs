const numbers = [5, 8, 10, 15, 20, 28, 32, 45, 55, 65, 70];

const even = numbers.find(n => n % 2 === 0)
console.log(even)

const biggerThan50 = numbers.find(n => n > 50)
console.log(biggerThan50)

const citys = ["Göteborg", "Gävle", "Malmö", "Alingsås", "Falkenberg", "Falköping", "Stockholm"]

const firstS = citys.find(city => city.startsWith("S"));
console.log(firstS)

const oe = citys.find(city => city.includes("ö"))
console.log(oe)

const books = [
    { title: "Lord Of The Rings", author: "J.R.R Tolkien", year: 1955, pages: 677 },
    { title: "Sasquatch Discovered", author: "Dr. John Bindernagel", year: 1987, pages: 211 },
    { title: "Harry Potter And The Sorcerer's Stone", author: "J.K. Rowling", year: 1997, pages: 398 },
    { title: "Plupp och vårfloden", author: "Inga Borg", year: 1985, pages: 37 },
    { title: "Narnia", author: "C.S. Lewis", year: 1949, pages: 511 }
]

const LOTR = books.find(book => book.title === "Lord Of The Rings")
console.log(LOTR)

const after1990 = books.find(book => book.year > 1990)
console.log(after1990)

const pagesMoreThan400 = books.find(book => book.pages > 400)
console.log(pagesMoreThan400)

class Product {
    #id;
    #name;
    #price;
    #inStock;

    constructor(id, name, price, inStock) {
        this.#id = id;
        this.#name = name;
        this.#price = price;
        this.#inStock = inStock;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get price() {
        return this.#price;
    }

    get inStock() {
        return this.#inStock;
    }

    get isExpensive() {
        return this.#price > 500;
    }
}

    const products = [
  new Product(1, "Mus", 299, true),
  new Product(2, "Tangentbord", 899, true),
  new Product(3, "Skärm", 3499, false),
  new Product(4, "Headset", 449, true),
  new Product(5, "Webbkamera", 599, false),
  new Product(6, "USB-hub", 149, true)
];

const product3 = products.find(product => product.id === 3)
console.log(product3)

const outOfStock = products.find(p => p.inStock === false)
console.log(outOfStock)

const expensiveProduct = products.find(p => p.isExpensive)
console.log(expensiveProduct)