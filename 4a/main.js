class Car {
    constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    }
}

const car1 = new Car("Saab", "900", 31);
const car2 = new Car("Volvo", "240", 38);
const car3 = new Car("Fiat", "500", 33);

console.log("Bilmärke:", car1.brand, "Ålder:", car1.year)
console.log("Bilmärke:", car2.brand, "Ålder:", car2.year)
console.log("Bilmärke:", car3.brand, "Ålder:", car3.year)

class BankAccount {
    constructor(owner, balance = 0) {
        this.owner = owner;
        this.balance = balance;
        this.currency = "SEK";
    }
}

const account1 = new BankAccount("Oskar")
const account2 = new BankAccount("Johan", 50000)

console.log(account1.owner, account1.balance, account1.currency);
console.log(account2.owner, account2.balance, account2.currency);

class Movie {
    constructor(title, director, rating){
        this.title = title;
        this.director = director;
        this.rating = rating;
    }
}

const movies = [
    new Movie("Lord Of The Rings", "Peter Jackson", 10),
    new Movie("Star Wars: A New Hope", "George Lucas", 9),
    new Movie("Jurassic Park", "Steven Spielberg", 7),
    new Movie("The Big Lebowski", "Cohen Brothers", 10)
]

const div = document.getElementById("rating")
let html = "<ul>"

for (const movie of movies) {
    console.log(movie.title,":", movie.rating, "/10")

    html += `
    <li><strong>Title:</strong> ${movie.title} - <strong>Director:</strong> ${movie.director} <strong>Rating:</strong>${movie.rating}/10</li>
    `
}

html += "</ul>"
div.innerHTML = html

