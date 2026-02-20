const numbers = [10, -4, 2, 55, -44, 60, 2, 7, -22, 0, 1]

const positive = numbers.filter(n => n > 0)
console.log(positive)

const even = numbers.filter(n => n % 2 === 0)
console.log(even)

console.log(numbers)

const animals = ["Tjur", "Katt", "Hund", "Orm", "Ko", "Papegoja", "Orangutang", "Blåval"]

const animal5 = animals.filter(n => n.length > 5)
console.log(animal5)

const animalA = animals.filter(n => n.includes("a"))
console.log(animalA)

const students = [
    { name: "Oskar", age: 24, grade: 92 },
    { name: "Kalle", age: 22, grade: 66 },
    { name: "Alfred", age: 15, grade: 45 },
    { name: "Kevin", age: 12, grade: 24 },
    { name: "Frank", age: 11, grade: 67 }
]

const pass = students.filter(n => n.grade >= 50)
console.log(pass.length)

const under20 = students.filter(n => n.age < 20)
console.log(under20.length)

const movies = [
  { title: "Inception", year: 2010, genre: "Action", rating: 9 },
  { title: "The Godfather", year: 1972, genre: "Drama", rating: 9 },
  { title: "Toy Story", year: 1995, genre: "Animation", rating: 8 },
  { title: "Die Hard", year: 1988, genre: "Action", rating: 7 },
  { title: "Frozen", year: 2013, genre: "Animation", rating: 6 },
  { title: "Mad Max: Fury Road", year: 2015, genre: "Action", rating: 8 },
  { title: "The Room", year: 2003, genre: "Drama", rating: 3 },
  { title: "Interstellar", year: 2014, genre: "Drama", rating: 8 }
];

let div = document.getElementById("movieCon")

function displayMovies(movies) {
    div.innerHTML = "";

    for (const movie of movies) {
        const divs = document.createElement("div");
        divs.innerHTML = `
        <h3>${movie.title} (${movie.year})</h3>
        <p>${movie.genre} - ${movie.rating}/10</p>
        `
        div.append(divs);
    }
}

document.getElementById("btn-top").addEventListener("click", () => {
    const topRated = movies.filter(movie => movie.rating >= 7)
    displayMovies(topRated)
})

document.getElementById("btn-action").addEventListener("click", () => {
    const actionMovies = movies.filter(m => m.genre === "Action")
    displayMovies(actionMovies)
})

document.getElementById("btn-modern").addEventListener("click", () => {
    const modernMovies = movies.filter(m => m.year >= 2000)
    displayMovies(modernMovies)
})

displayMovies(movies)

const contacts = [
  { name: "Anna Andersson", email: "anna@example.com", city: "Stockholm" },
  { name: "Erik Eriksson", email: "erik@gmail.com", city: "Göteborg" },
  { name: "Maria Svensson", email: "maria@example.com", city: "Malmö" },
  { name: "Johan Berg", email: "johan@hotmail.com", city: "Uppsala" },
  { name: "Lisa Holm", email: "lisa@gmail.com", city: "Stockholm" },
  { name: "Oscar Nilsson", email: "oscar@example.com", city: "Linköping" },
  { name: "Klara Johansson", email: "klara@gmail.com", city: "Göteborg" },
  { name: "David Lundgren", email: "david@example.com", city: "Malmö" },
  { name: "Sara Blom", email: "sara@hotmail.com", city: "Lund" },
  { name: "Nils Ekström", email: "nils@example.com", city: "Stockholm" }
];

const container = document.getElementById("contacts")
const searchInput = document.getElementById("search")

function displayContacts(list) {
    container.innerHTML = "";

    for (const contact of list) {
        const div = document.createElement("div")
        const heading = document.createElement("h3")
        heading.textContent = contact.name;

        const emailP = document.createElement("p")
        emailP.textContent = contact.email

        const cityP = document.createElement("p")
        cityP.textContent = contact.city

        div.append(heading, emailP, cityP)
        container.append(div)
    }
}

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    const filtered = contacts.filter(contact => {
        return contact.name.toLowerCase().includes(query)
    })
    displayContacts(filtered)
})

displayContacts(contacts)