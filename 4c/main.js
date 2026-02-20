class Password {
    #value
    constructor(password) {
        this.#value = password;
    }

    check (input) {
        return input === this.#value;
    }
}

const myPassword = new Password("korven321");
console.log(myPassword.check("gej"))
console.log(myPassword.check("korven321"))

class Person {
    #firstName; 
    #lastName;

    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    get fullName() {
        return `${this.#firstName} ${this.#lastName}`
    }

    get initials() {
        return `${this.#firstName[0]}.${this.#lastName[0]}.`
    }
}

const name1 = new Person("Oskar", "Berntson")
console.log(name1.fullName)
console.log(name1.initials)

class Product {
    #name;
    #price;

    constructor(name, price) {
        this.#price = price;
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        if (value < 0) {
            console.log("Ogiltigt värde")
        }
        this.#price = value;
    }
}

const product1 = new Product("Mjölk", -20);

console.log(product1.price)

product1.price = -100;

class Student {
    #name;
    #grades;

    constructor(name) {
        this.#name = name;
        this.#grades = [];
    }

    get name() {
        return this.#name;
    }

    addGrade(grade) {
         if (grade < 0 || grade > 100) {
            console.log("Ogiltigt betyg");
            return;
         }
         this.#grades.push(grade);
    }

    get average() {
        if (this.#grades.length === 0) return 0;
        let sum = 0;
        for (const grade of this.#grades) {
            sum += grade;
        } 
        return sum / this.#grades.length;
    }

    get status() {
        return this.average >= 50 ? "Godkänd" : "Underkänd"
    }
}

const student = new Student("Oskar");
student.addGrade(40);
student.addGrade(88);
student.addGrade(90);
student.addGrade(77);
student.addGrade(-5);

console.log(student.name)
console.log(student.average)
console.log(student.status)