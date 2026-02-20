const book = {
    title: "Plupp",
    year: 1985,
    isbn: null
}

console.log(book.title, book.isbn, book.publisher)

const username = null;
const level = 0;
const bio = "";

const displayName = username ?? "Anonym"

const displayLevel = level ?? 1

const dispalyBio = bio ?? "Ingen bio angiven"

console.log(displayName)
console.log(displayLevel)
console.log(dispalyBio)

// const profiles = [
//   { name: "Anna", email: "anna@example.com", address: { city: "Uppsala", street: "Svartbäcksgatan 12" } },
//   { name: "Erik", email: null, address: { city: "Göteborg" } },
//   { name: "Maria", email: "maria@example.com", address: null },
//   { name: "Johan" }
// ];

const container = document.getElementById("profileCon")

// function createProfileCard(profile) {

//     const email = profile.email ?? "Ej angiven";
//     const name = profile.name ?? "Ej angiven";
//     const city = profile.city ?? "Ej angiven";
//     const phone = profile.phone ?? "Ej angiven"
//     const adress = profile.adress?.street ?? "Ej angiven"


//     const card = document.createElement("div");

//     const heading = document.createElement("h3")
//     heading.textContent = name;

//     const Pemail = document.createElement("p")
//     Pemail.textContent = email;

//     const Pphone = document.createElement("p")
//     Pphone.textContent = phone;

//     const Pcity = document.createElement("p")
//     Pcity.textContent = city;

//     const Padress = document.createElement("p")
//     Padress.textContent = adress

//     card.append(name, email, city, phone)
//     return card;
// }

// for (const profile of profiles) {
//     container.append(createProfileCard(profile))
// }

const forecasts = [
  {
    city: "Stockholm",
    temperature: 12,
    description: "Växlande molnighet",
    wind: { speed: 5, direction: "SV" },
    precipitation: 0
  },
  {
    city: "Göteborg",
    temperature: null,
    description: "Regn",
    wind: { speed: 12, direction: null },
    precipitation: 8
  },
  {
    city: "Malmö",
    temperature: 15,
    description: null,
    wind: null,
    precipitation: null
  },
  {
    city: "Kiruna",
    temperature: -3,
    wind: { speed: 2 }
  },
  {
    city: null,
    temperature: 9,
    description: "Soligt",
    wind: { speed: 0, direction: "N" },
    precipitation: 0
  }
];

function createForecast(forecast) {
    const city = forecast.city ?? "Okänt"
    const temperature = forecast.temperature ?? "Temperatur saknas";
    const description = forecast.description ?? "Ingen prognos";
    const windSpeed = forecast.wind?.speed ?? "Okänd hastighet";
    const windDirection = forecast.wind?.direction ?? "Okänd riktning";
    const precipitation = forecast.precipitation ?? "Ingen data";

    const cards = document.createElement("div")

    const heading = document.createElement("h3");
    heading.textContent = `Stad: ${city}`;

    const pTemp = document.createElement("p")
    pTemp.innerHTML = `Temperatur: <strong>${temperature}</strong>`;

    const pDescrip = document.createElement("p")
    pDescrip.innerHTML = `Prognos: <strong>${description}</strong>`;

    const pWindspeed = document.createElement("p")
    pWindspeed.innerHTML = windSpeed != null && windDirection != null ? `Vindhastighet: <strong>${windSpeed} M/S</strong> (${windDirection})`: "Vinddata saknas"

  const precipP = document.createElement("p");
  precipP.textContent = precipP !== null && precipP !== undefined
    ? `Nederbörd: ${precipitation} mm`
    : "Nederbörd: Ingen data";


    cards.append(heading, pTemp, pDescrip, pWindspeed)
return cards
}

for (const forecast of forecasts) {
    container.append(createForecast(forecast))
}