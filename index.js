
function actualizarUI(titulo, parrafoTexto, imagenSrc) {
    document.getElementById("titulo-mensaje").textContent = titulo;
    document.getElementById("parrafo").textContent = parrafoTexto;
    document.getElementById("encriptador-secreto").src = imagenSrc;
    
}
 
function validarTexto(texto) {
    const tieneMayusculas = /[A-Z]/.test(texto);
    const tieneNumeros = /\d/.test(texto);
    const tieneAcentos = /[áéíóúÁÉÍÓÚ]/.test(texto);

    if (tieneMayusculas || tieneNumeros || tieneAcentos) {
        swal("Error", "El texto no puede contener mayúsculas, números ni acentos", "warning");
        return false;
    }

    return true;
}


function encriptar() {
    let texto = document.getElementById("texto").value;

    if (texto.length === 0) {
        actualizarUI("Ningún mensaje fue generado", "Ingresa el texto que deseas encriptar o desencriptar", "./img/encriptador-secreto.jpg");
        swal("Lo siento :c", "Debes ingresar un texto válido", "warning");
        return;
    }

    if (!validarTexto(texto)) {
        return;
    }

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    document.getElementById("texto").value = textoCifrado;
    actualizarUI("Texto encriptado con éxito", "", "./img/desencriptado.jpg");
}

function desencriptar() {
    let texto = document.getElementById("texto").value;

    if (texto.length === 0) {
        actualizarUI("Ningún mensaje fue encontrado", "Ingresa el texto que deseas encriptar o desencriptar", "./img/encriptador-secreto.jpg");
        swal("Error lo siento :c", "Debes ingresar un texto", "warning");
        return;
    }

    if (!validarTexto(texto)) {
        return;
    }

    let textoDesencriptado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    document.getElementById("texto").value = textoDesencriptado;
    actualizarUI("Texto desencriptado con éxito", "", "./img/desencriptado.jpg");   
}

function copiarTexto() {
    const mensaje = document.getElementById("texto");

    try {
         navigator.clipboard.writeText(mensaje.value); // Copia el texto al portapapeles
        console.log("Texto copiado al portapapeles"); 
    } catch (err) {
        console.error("Error al copiar el texto: ", err);
    }
} 