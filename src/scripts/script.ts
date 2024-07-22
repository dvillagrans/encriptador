import { encriptar, desencriptar } from "../lib/encriptador";

// Declarar las propiedades globales
declare global {
  interface Window {
    encriptarTexto: () => void;
    desencriptarTexto: () => void;
    copiarTexto: () => void;
  }
}

window.encriptarTexto = function() {
  const inputText = document.getElementById("inputText") as HTMLTextAreaElement;
  const outputText = document.getElementById("outputText") as HTMLTextAreaElement;
  const emptyState = document.getElementById("emptyState");
  const resultState = document.getElementById("resultState");

  if (inputText && outputText && emptyState && resultState) {
    const textoEncriptado = encriptar(inputText.value);
    outputText.value = textoEncriptado;

    emptyState.classList.add("hidden");
    resultState.classList.remove("hidden");
  }
}

window.desencriptarTexto = function() {
  const inputText = document.getElementById("inputText") as HTMLTextAreaElement;
  const outputText = document.getElementById("outputText") as HTMLTextAreaElement;
  const emptyState = document.getElementById("emptyState");
  const resultState = document.getElementById("resultState");

  if (inputText && outputText && emptyState && resultState) {
    const textoDesencriptado = desencriptar(inputText.value);
    outputText.value = textoDesencriptado;

    emptyState.classList.add("hidden");
    resultState.classList.remove("hidden");
  }
}

window.copiarTexto = function() {
  const outputText = document.getElementById("outputText") as HTMLTextAreaElement;
  if (outputText) {
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
  }
}

// Asegúrate de que el DOM esté completamente cargado antes de agregar los event listeners
document.addEventListener('DOMContentLoaded', (event) => {
  document
    .getElementById("encriptarBtn")
    ?.addEventListener("click", window.encriptarTexto);
  document
    .getElementById("desencriptarBtn")
    ?.addEventListener("click", window.desencriptarTexto);
  document
    .getElementById("copyBtn")
    ?.addEventListener("click", window.copiarTexto);
});