const personElement = document.getElementById("div1")

const person = {
    firstName: "Oskar",
    lastName: "Berntson",
    age: 24,
    occupation: "Student",
    adress: {
        street: "Apotekare Reinholds väg",
        city: "Växjö",
        country: "Sverige"
    }
    
}

console.log(person)
console.log(person.firstName)
console.log(person["lastName"])

console.log(person.age)
console.log(person["age"])
console.log("Min stad:",person.adress.city)

const car = {
    type: "Peugot",
    model: 208,
    year: 2015,
    color: "White",
    specs: {
        horsepower: 89,
        tyres: "Michelin"
    },
    miles: [1000, 2000, 3000, 4000]
}

person.hobby = "Fotografering";
person.age = 37;
delete person.occupation;

console.log("occupation" in person)
console.log(person)

personElement.innerHTML = `
<h2>${person.firstName} ${person.lastName}</h2>
<p>Ålder: ${person.age}</p>
`

const keys = Object.keys(person);
console.log(keys)

for(const key in person) {
    console.log(key, person[key])
}