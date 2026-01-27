localStorage.setItem("animal", "hund");

const input = document.getElementById("nameInput")
const button = document.getElementById("button")

const savedName = localStorage.getItem("name")
if (savedName) {
    input.value = savedName
}

input.addEventListener("input", function() {
    localStorage.setItem("name", input.value)
})

button.addEventListener("click", function() {
    localStorage.clear();
    input.value = "";
})

const themeRadios = document.querySelectorAll('input[name="theme"]');
let savedTheme =  "light"; // default värde
if (localStorage.getItem('selectedTheme')) {
  savedTheme = localStorage.getItem('selectedTheme');
}

// Tillämpa sparat tema
document.body.className = savedTheme + '-theme';
document.querySelector(`input[value="${savedTheme}"]`).checked = true;

// Lyssna på ändringar
themeRadios.forEach(radio => {
  radio.addEventListener('change', function() {
    localStorage.setItem('selectedTheme', this.value);
    document.body.className = this.value + '-theme';
  });
});