const button = document.getElementById("button")

const message = localStorage.getItem("animal")
console.log(message)

button.addEventListener("click", function() {
    localStorage.removeItem("animal")
    console.log("Sparat djur är borttaget!")
})