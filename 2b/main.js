const car = {
    brand: "Volvo",
    model: "V50",
    year: 2007,
    getDescription() {
    return `${this.year} ${this.brand} ${this.model}`;
},
honk () {
    console.log("Tut tut!")
}
}

console.log(car.getDescription());
car.honk()

const counter = {
    value: 0,
    increase() {
        this.value++;
    },
    decrease() {
        this.value--
    },
    reset() {
        this.value = 0
    }
}

console.log(counter.value)
counter.increase()
console.log(counter.value)
counter.increase()
console.log(counter.value)
counter.decrease()
console.log(counter.value)
counter.reset()
console.log(counter.value)