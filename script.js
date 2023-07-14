"use strict";
function calcularRaiz() {
    var numberInput = document.getElementById("number").value;
    var resultado = document.getElementById("result");
    var errorElemento = document.getElementById("error");
  
    try {
      var number = parseFloat(numberInput);
  
      if (isNaN(number)) {
        throw new Error("Debes colocar un numero.");
      }
  
      if (number < 0) {
        throw new Error("No se aceptan números negativos.");
      }
  
      var numero = Math.sqrt(number);
      resultado.textContent = "Raíz Cuadrada: " + numero;
      errorElemento.textContent = "";
    } catch (error) {
      resultado.textContent = "";
      errorElemento.textContent = error.message;
    }
  }