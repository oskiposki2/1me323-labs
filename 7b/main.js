const map = L.map("map").setView([59, 15], 5)

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const popupContent = `
<h3>Familjen Berntsons hus</h3>
<p>Här bor Alf & Annakarin</p>
`

const secondMarker = `
<h3>ICA Maxi Alingsås</h3>
<p>Välkommen hit</p>
<a href="https://www.ica.se/butiker/maxi/alingsas/maxi-ica-stormarknad-alingsas-1003647/" target="_blank">Besök webbplatsen</a>
`

L.marker([57.918052, 12.538322]).addTo(map).bindPopup(popupContent)

L.marker([57.924340, 12.545396]).addTo(map).bindPopup(secondMarker)

async function loadPlaces() {
    const status = document.querySelector("#status")
    const markers = L.layerGroup().addTo(map)
    try {
        const respnose = await fetch("places.json")
        const places = await respnose.json();

        for (const placeData of places) {

            const marker = `
        <h3>${placeData.name}</h3>
        <p>${placeData.location}</p>
        <p>${placeData.description}</p>
        `

            L.circleMarker([placeData.coordinates.lat, placeData.coordinates.lng], {
                radius: 10,
                fillColor: "#ff7800",
                color: "#000",
                fillOpacity: 0.8
            }).addTo(markers).bindPopup(marker)
        }
    } catch (error) {
        status.textContent = "Kunde inte ladda platser"
    }
}

loadPlaces();