fetch("menu.json")
.then(data => data.json())
.then(info => {
    console.log("Resturang:", info.restaurant.name)
    console.log("Antal kategorier:", info.categories.length)
    console.log("Förrätter:", info.dishes)
})

