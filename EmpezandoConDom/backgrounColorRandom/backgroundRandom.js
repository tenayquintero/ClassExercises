"use strict";

const generarColores = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const rgbColor = `rgb(${r}, ${g},${b})`;

  return rgbColor;
};

let myBody = document.querySelector("body");
let p = document.querySelector("p");
let contador = 1;
const interval = setInterval(() => {
  myBody.style.background = generarColores();
  p.innerHTML = contador;
  contador++;

  if (contador === 11) {
    clearInterval(interval);
    p.innerHTML="bye!!!"
  }
}, 1000);
