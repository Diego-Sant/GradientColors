const gradientBox = document.querySelector(".gradient-box");
const gradientBackground = document.querySelector("body");
const selectMenu = document.querySelector(".select-box select");
const textarea = document.querySelector("textarea");

const refresh = document.querySelector(".refresh");
const copy = document.querySelector(".copy");

const colorReset = document.querySelector(".refresh");
const colorCopy = document.querySelector(".copy");
const colorInputs = document.querySelectorAll(".colors input");

const getRandomColor = () => {
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}

const generatedGradient = (isRandom) => {
    if (isRandom) {
        colorInputs[0].value = getRandomColor();
        colorInputs[1].value = getRandomColor();
    }

    const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
    const resetButton = `${colorInputs[0].value}`
    const copyButton = `${colorInputs[1].value}`
    textarea.value = `background: ${gradient};`

    gradientBox.style.background = gradient
    gradientBackground.style.background = gradient
    colorReset.style.background = resetButton
    colorCopy.style.background = copyButton
}

const copyCode = () => {
    navigator.clipboard.writeText(textarea.value);
    copy.innerText = "Código copiado!";
    setTimeout(() => copy.innerText = "Copiar", 1600)
}

colorInputs.forEach(input => {
    input.addEventListener("input", () => generatedGradient(false));
})

selectMenu.addEventListener("change", () => generatedGradient(false));
refresh.addEventListener("click", () => generatedGradient(true));
copy.addEventListener("click", copyCode);