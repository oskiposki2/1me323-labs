const student = {
    name: "Oskar",
    courses: ["Webbteknik 3", "Digitala medier", "Webbteknik 2"]
}

localStorage.setItem("student", student)

const jsonString = JSON.stringify(student)
console.log(jsonString)

const parsed = JSON.parse(jsonString)
console.log(parsed)

function saveStudent(studentData) {
    const json = JSON.stringify(studentData)
    localStorage.setItem("student", json)
}

function loadStudent() {
    const saved = localStorage.getItem("student")
    return JSON.parse(saved)
}

const jsonproduct = `{"title": "iPhone 15", "price": 12999, "inStock": true, "colors": ["svart", "vit", "blå"], "specs": {"storage": "128GB", "camera": "48MP"}}`

// A
const jsonA = '{"name": "Ada", "age": 36}';

// B 
const jsonB = "{'name': 'Ada', 'age': 36}";

// C
const jsonC = '{"name": "Ada", "age": 36,}';

// D
const jsonD = '{"name": "Ada", "hobbies": ["math", "coding"], "active": true}';

const parsed2 = JSON.parse(jsonproduct)

console.log(parsed2)