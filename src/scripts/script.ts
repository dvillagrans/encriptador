import { encriptar, desencriptar } from "../lib/encriptador";

function initializeScript() {
  const encriptarTexto = function() {
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

  const desencriptarTexto = function() {
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

  const copiarTexto = function() {
    const outputText = document.getElementById("outputText") as HTMLTextAreaElement;
    if (outputText) {
      outputText.select();
      document.execCommand("copy");
      alert("Texto copiado al portapapeles");
    }
  }

  document
    .getElementById("encriptarBtn")
    ?.addEventListener("click", encriptarTexto);
  document
    .getElementById("desencriptarBtn")
    ?.addEventListener("click", desencriptarTexto);
  document
    .getElementById("copyBtn")
    ?.addEventListener("click", copiarTexto);
}

export { initializeScript };