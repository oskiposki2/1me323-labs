class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * this.width + 2 * this.height
    }

    describe() {
        return `Rektangel: ${this.width} x ${this.height} (area: ${this.getArea()}, omkrets: ${this.getPerimeter()})`;
    }
}

const rectangle1 = new Rectangle(5, 10)
const rectangle2 = new Rectangle(7, 6)

console.log(rectangle1.getArea())
console.log(rectangle2.getArea())

console.log(rectangle1.describe())

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item){
        this.items.push({ name: item, quantity: 1 })
    }

    getTotal() {
        let total = 0;
        for (const item of this.items) {
            total += item.quantity
        }
        return total;
    }

    listItems() {
        for (const item of this.items) {
            console.log(`${item.name} (${item.quantity} st)`)
        }
    }
}

const cart = new ShoppingCart();
cart.addItem("Lök")
cart.addItem("Bröd")
cart.addItem("Mjölk")

cart.listItems();

console.log("Totalt antal:", cart.getTotal());

class Clicker {
    constructor() {
        this.count = 0;
    }

    setup() {
        const button = document.getElementById("button")
        const renderNumber = document.getElementById("numberdisplay")

        button.addEventListener("click", () => {
            this.count++;
            renderNumber.textContent = this.count
        })
    }
}

const clicker = new Clicker();
clicker.setup();