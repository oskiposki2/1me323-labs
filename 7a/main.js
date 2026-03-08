// const simpsons = new URLSearchParams({ q: "simpsons" });
// console.log(simpsons.toString());

// const doubleParams = new URLSearchParams({ q: "hej världen", limit: 5 });
// console.log(doubleParams.toString())

// const url = `https://api.tvmaze.com/search/shows?${simpsons.toString()}`

// console.log(url)

function debounce(func, delay) {
  let timeoutId;

  return function (value) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(value);
    }, delay);
  };
}

async function searchShows(query) {
    const params = new URLSearchParams({ q: query })

    const response = await fetch(`https://api.tvmaze.com/search/shows?${params}`);

    if (!response.ok) {
        throw new Error("Sökningen misslyckades");
    }

    return response.json();
}

const searchInput = document.querySelector("#search");
let results = document.querySelector("#results");

searchInput.addEventListener("input", async () => {
    const query = searchInput.value.trim();
    if (query.length === 0) return;

    showLoading();

    try {
        const data = await searchShows(query)
        displayResults(data);
    } catch (error) {
        showError("Kunde inte hämta resultat")
    }
})

function displayResults(data) {
    results.innerHTML = "";


    const container = document.createElement("div")

    for (const result of data) {
        const container = document.createElement("div")

        container.innerHTML = `<h3>${result.show.name}</h3>
        <p>Betyg: ${result.show.rating.average ? `${result.show.rating.average}` : "Betyg saknas"}</p>`

        results.append(container)
    }
}

function showLoading() {
  results.innerHTML = "<p>Söker...</p>";
}

function showError(message) {
  results.innerHTML = `<p class="error">${message}</p>`;
}

