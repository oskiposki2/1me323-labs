const numbers = [2, 4, 5, 7, 8, 11]

const quad = numbers.map(n => n * n)
console.log(quad)

const string = numbers.map(n => `Tal: ${n}`)
console.log(string)

// const animals = ["katt", "hund", "giraff", "elefant", "hamster", "groda"]

// const versaler = animals.map(a => a.toUpperCase())
// console.log(versaler)

// const tecken = animals.map(a => `${a} (${a.length} tecken)`)
// console.log(tecken)

const books = [
    { title: "Lord Of The Rings", author: "J.R.R. Tolkien", pages: 688 },
    { title: "Harry Potter", author: "J.K. Rowling", pages: 511 },
    { title: "Sasquatch Discovered", author: "Dr. John Bindernagel", pages: 312 },
    { title: "Plupp och vårfloden", author: "Inga Borg", pages: 38 },
    { title: "Dune", author: "Frank Herbert", pages: 412 },
]

const titles = books.map(b => b.title)
console.log(titles)

const reading = books.map(b => ({ title: b.title, readingTime: Math.ceil(b.pages / 30) }))
console.log(reading)

const animals = [
  { name: "Gösta", species: "Pingvin", age: 4, weight: 5, habitat: "Arktis" },
  { name: "Barbro", species: "Elefant", age: 32, weight: 4200, habitat: "Savann" },
  { name: "Sansen", species: "Papegoja", age: 67, weight: 1, habitat: "Regnskog" },
  { name: "Doris", species: "Sköldpadda", age: 104, weight: 80, habitat: "Savann" },
  { name: "Bengt-Åke", species: "Pingvin", age: 2, weight: 4, habitat: "Arktis" },
  { name: "Sigrid", species: "Flodhäst", age: 18, weight: 1800, habitat: "Savann" },
  { name: "Margit", species: "Papegoja", age: 12, weight: 1, habitat: "Regnskog" },
  { name: "Knansen", species: "Krokodil", age: 45, weight: 450, habitat: "Regnskog" }
];

const savann = animals.filter(a => a.habitat === "Savann")
.map(a => a.name)
console.log(savann)

const lightWeight = animals.filter(a => a.weight < 10)
.map(a => `${a.name} (${a.species}, ${a.age} år)`)
console.log(lightWeight)

const oldButGold = animals.filter(a => a.age > 20)
.map(a => `🏆 ${a.name}, ${a.species} - ${a.age} år`)
console.log(oldButGold)

const container = document.getElementById("display")

function animalDisplay(title, items){
    container.innerHTML = "";

    const heading = document.createElement("h2")
    heading.textContent = title;
    container.append(heading)

    const list = document.createElement("ul")
    for (const cards of items) {
        const li = document.createElement("li")
        li.textContent = items;
        list.append(li)
    }
    container.append(list)
} 

animalDisplay("Smådjur", lightWeight)
animalDisplay("Bor på savannan", savann)
animalDisplay("Gamal djur:", oldButGold)