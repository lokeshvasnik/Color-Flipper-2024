const button = document.getElementById("btn");

const colors = ["#f9ca24", "#e056fd", "#eb4d4b", "#30336b", "#badc58"];

const spanColor = document.querySelector(".color");

const colorsLength = colors.length;

button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * colorsLength);

    const selectedColor = colors[randomIndex];

    document.body.style.background = selectedColor;

    spanColor.textContent = selectedColor;
});
