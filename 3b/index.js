const responsePromise = await fetch("message.txt");
console.log(responsePromise)
const text = await responsePromise.text()
document.querySelector("main").textContent = text

// const textPromise = responsePromise.then(response => {
//     console.log(response)
//     return response.text()
// })

// textPromise.then(text => {
//     document.querySelector("main").textContent = text
// })

// const result = fetch("message.txt");
// console.log(result)

// fetch("message.txt")
// .then(response => {
//     console.log(response)
//     console.log("Status:", response.status);
//     console.log("OK?", response.ok);
//     console.log("URL:", response.url)
//     return response.text();
// })
// .then(text => {
//     console.log("Innehåll:", text)
// })

fetch("data.json")
.then(response => response.json())
.then(data => {
    console.log("Innehåll:", data)
})


