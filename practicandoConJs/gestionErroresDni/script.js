"use strict";

const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

// const validarDni = (dni) => {
//   if (dni.length !== 10 ) {
//     throw new Error("Cantidad de caracteres invalido");
//   }
//   const partesDni = dni.split("-");
//   if (partesDni.length !== 2) {
//     throw new Error("Debe de tener un guión");
//   }

//   const numero = +partesDni[0]
//   const letra = +partesDni[1];
//   if (!numero) {
//     throw new Error(
//       "Se ha introducido una letra en un espacio reservado a número"
//     );
//   }
//   if (letra) {
//     throw new TypeError("El último caracter no es una letra");
//   }
//   let verificarLetra = dni.slice(9, 10);

//   const resto = numero % 23;
//   const AsignacionLetra = letras[resto];
//   if (
//     AsignacionLetra.toLowerCase() !==
//     verificarLetra.toLowerCase()

//   ) {
//     throw new Error("La letra no es correcta");
//   }
// };
// try {
//   validarDni(00000000-0);
//   console.log("Bienvenid@ bonic@");
// } catch (error) {
//   console.log("Error>>>>>", error.message, TypeError());
// }

const validarDni = (dni) => {
  //1- Lo que se ha introducido es un string con 10 caracteres.
  if (dni.length !== 10 || typeof dni !== "string") {
    throw new Error("Error>>>>>> cantidad o tipo de caracteres incorrectos");
  }

  //2- Si separamos por el guión tiene dos partes.
  const ArrayDni = dni.split("-");
  if (ArrayDni.length !== 2) {
    throw new Error("Error>>>> El dni debe de estar divido por un guión");
  }

  //3- La primera parte (antes del guion) son 8 números.
  const [numDni, letDni] = ArrayDni;
  if (isNaN(numDni) || numDni.length !== 8) {
    throw new Error(
      "Error>>>>>>> Ha introducido una letra en espacio reservado a números"
    );
  }
  //4- La segunda parte (después del guion) es un único caracter
  if (letDni.length !== 1 || !isNaN(letDni)) {
    throw new Error(
      "Error>>>>>>>> Debe de introducir un único caracter de tipo letra despues del guión "
    );
  }
  // 5- La letra se corresponde con la que debería, según el número.
  const resto = numDni % 23;
  const validarLetra = letras[resto];

  if (validarLetra !== letDni.toUpperCase()) {
    throw new Error("Error>>>>>>> La letra no corresponde al documento");
  }
};
try{
  validarDni("0714130-F");
console.log("Bienvenid@ bonic@")
}catch(error){
console.log(error.message)
}


