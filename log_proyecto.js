var encryptButton = document.querySelector(".encrypt-button");
var decryptButton = document.querySelector(".decrypt-button");
var imageContainer = document.querySelector(".image-container");
var textContainer = document.querySelector(".text-container");
var resultText = document.querySelector(".result-text");

encryptButton.onclick = encrypt;
decryptButton.onclick = decrypt;

function encrypt() {
    var textareaContent = retrieveText();
    if (!validateText(textareaContent)) {
        resultText.textContent = "Opción no válida. Solo letras minúsculas y sin acentos.";
        return;
    }
    hideElements();
    resultText.textContent = encryptText(textareaContent);
}

function decrypt() {
    var textareaContent = retrieveText();
    if (!validateText(textareaContent)) {
        resultText.textContent = "Opción no válida. Solo letras minúsculas y sin acentos.";
        return;
    }
    hideElements();
    resultText.textContent = decryptText(textareaContent);
}

function retrieveText() {
    var textarea = document.querySelector(".textarea");
    return textarea.value;
}

function hideElements() {
    imageContainer.classList.add("hidden");
    textContainer.classList.add("hidden");
}

function validateText(text) {
    var regex = /^[a-z\s]*$/;  // Solo letras minúsculas y espacios
    return regex.test(text);
}

function encryptText(message) {
    var text = message;
    var finalText = "";

    for (var i = 0; i < text.length; i++) {
        if (text[i] == "a") {
            finalText += "ai";
        } else if (text[i] == "e") {
            finalText += "enter";
        } else if (text[i] == "i") {
            finalText += "imes";
        } else if (text[i] == "o") {
            finalText += "ober";
        } else if (text[i] == "u") {
            finalText += "ufat";
        } else {
            finalText += text[i];
        }
    }
    return finalText;
}

function decryptText(message) {
    var text = message;
    var finalText = "";

    for (var i = 0; i < text.length; i++) {
        if (text[i] == "a") {
            finalText += "a";
            i += 1;
        } else if (text[i] == "e") {
            finalText += "e";
            i += 4;
        } else if (text[i] == "i") {
            finalText += "i";
            i += 3;
        } else if (text[i] == "o") {
            finalText += "o";
            i += 3;
        } else if (text[i] == "u") {
            finalText += "u";
            i += 3;
        } else {
            finalText += text[i];
        }
    }
    return finalText;
}

const copyButton = document.querySelector(".copy-button");
copyButton.addEventListener("click", () => {
    var content = document.querySelector(".result-text").textContent;
    navigator.clipboard.writeText(content);
    console.log("Texto copiado");
});

