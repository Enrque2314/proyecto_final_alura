document.addEventListener('DOMContentLoaded', () => {
    var botonEncriptar = document.querySelector(".button-encriptar");
    var botonDesencriptar = document.querySelector(".button-desencriptar");
    var munieco = document.querySelector(".personaje_animado");
    var contenedor = document.querySelector(".contenedor_texto1");
    var resultado = document.querySelector(".texto-resultado");
    var btnCopiar = document.querySelector(".btn_copiar");
    
    botonEncriptar.onclick = encriptar;
    botonDesencriptar.onclick = desencriptar;
    btnCopiar.addEventListener("click", copiar);

    function encriptar() {
        ocultarAdelante();
        var cajatexto = recuperarTexto();
        resultado.textContent = encriptarTexto(cajatexto);
    }

    function desencriptar() {
        ocultarAdelante();
        var cajatexto = recuperarTexto();
        resultado.textContent = desencriptarTexto(cajatexto);
    }

    function recuperarTexto() {
        var cajatexto = document.querySelector(".caja");
        return cajatexto.value;
    }

    function ocultarAdelante() {
        munieco.classList.add("ocultar");
        contenedor.classList.add("ocultar");
    }

    function encriptarTexto(mensaje) {
        var texto = mensaje;
        var textoFinal = "";

        for (var i = 0; i < texto.length; i++) {
            if (texto[i] === "a") {
                textoFinal += "ai";
            } else if (texto[i] === "e") {
                textoFinal += "enter";
            } else if (texto[i] === "i") {
                textoFinal += "imes";
            } else if (texto[i] === "o") {
                textoFinal += "ober";
            } else if (texto[i] === "u") {
                textoFinal += "ufat";
            } else {
                textoFinal += texto[i];
            }
        }
        return textoFinal;
    }

    function desencriptarTexto(mensaje) {
        var texto = mensaje;
        var textoFinal = "";

        for (var i = 0; i < texto.length; i++) {
            if (texto[i] === "a" && texto.substr(i, 2) === "ai") {
                textoFinal += "a";
                i++;
            } else if (texto[i] === "e" && texto.substr(i, 5) === "enter") {
                textoFinal += "e";
                i += 4;
            } else if (texto[i] === "i" && texto.substr(i, 4) === "imes") {
                textoFinal += "i";
                i += 3;
            } else if (texto[i] === "o" && texto.substr(i, 4) === "ober") {
                textoFinal += "o";
                i += 3;
            } else if (texto[i] === "u" && texto.substr(i, 4) === "ufat") {
                textoFinal += "u";
                i += 3;
            } else {
                textoFinal += texto[i];
            }
        }

        return textoFinal;
    }

    function copiar() {
        var contenido = resultado.textContent;
        navigator.clipboard.writeText(contenido).then(() => {
            console.log("Texto copiado al portapapeles");
        }, (err) => {
            console.error("Error al copiar el texto: ", err);
        });
    }
});
