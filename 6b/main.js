const input = document.querySelector("#message");

const preview = document.querySelector("#preview-text")
const previewBox = document.querySelector("#preview")

input.addEventListener("input", () => {
    if (input.value === "") {
        preview.textContent = "Hej! Jag ändras när du justerar kontrollerna."
    } else {
        preview.textContent = input.value;
    }
})

const sizeSlider = document.querySelector("#size");
const sizeValue = document.querySelector("#size-value");

sizeSlider.addEventListener("input", () => {
    sizeValue.textContent = sizeSlider.value;
    preview.style.fontSize = sizeSlider.value + "px"
})

const opacitySlider = document.querySelector("#opacity");
const opacityValue = document.querySelector("#opacity-value");

opacitySlider.addEventListener("input", () => {
    opacityValue.textContent = opacitySlider.value;
    preview.style.opacity = Number(opacitySlider.value) / 100
})

const alignSelect = document.querySelector("#align");

alignSelect.addEventListener("change", () => {
    preview.style.fontFamily = alignSelect.value
})

const fat = document.querySelector("#bold")

fat.addEventListener("change", () => {
    if (fat.checked) {
        preview.style.fontWeight = "bold";
    } else {
        preview.style.fontWeight = "";
    }
})

const italic = document.querySelector("#italic");

italic.addEventListener("change", () => {
    if (italic.checked) {
        preview.style.fontStyle = "italic";
    } else {
        preview.style.fontStyle = "";
    }
})

const underline = document.querySelector("#underline")

underline.addEventListener("change", () => {
    if (underline.checked) {
        preview.style.textDecoration = "underline";
    } else {
        preview.style.textDecoration = "";
    }
})

const colorPicker = document.querySelector("#color")

colorPicker.addEventListener("input", () => {
    previewBox.style.backgroundColor = colorPicker.value;
})

const textColorPicker = document.querySelector("#textColor")

textColorPicker.addEventListener("input", () => {
    preview.style.color = textColorPicker.value;
})

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

const nameInputMessage = document.querySelector("#name-status")
const emailInputMessage = document.querySelector("#email-status")

nameInput.addEventListener("input", () => {
    if (nameInput.validity.valueMissing) {
        nameInputMessage.textContent = "Fältet är obligatoriskt"
    } else if (nameInput.validity.tooShort) {
        nameInputMessage.textContent = "Namn måste vara minst 2 tecken"
    } else if (nameInput.validity.valid) {
        nameInputMessage.textContent = "Ser bra ut!"
    }
})

emailInput.addEventListener("input", () => {
    if (emailInput.validity.typeMismatch) {
        emailInputMessage.textContent = "Ange en giltig e-postadress"
    } else if (emailInput.validity.valid) {
        emailInputMessage.textContent = "Ser bra ut!"
    }
})