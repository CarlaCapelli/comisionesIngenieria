let comisionA: number[] = [8, 5, 7, 10, 9, 2, 4, 8, 6, 8];
let comisionB: number[] = [3, 6, 8, 5, 4, 7, 7, 4, 6, 8];
let comisionC: number[] = [7, 6, 9, 8, 9, 8, 5, 7, 10, 9];

function mayorProm() {
  let sumaA: number = 0;
  let sumaB: number = 0;
  let sumaC: number = 0;
  let promA: number = 0;
  let promB: number = 0;
  let promC: number = 0;
  for (let i: number = 0; i < comisionA.length; i++) {
    sumaA = sumaA + comisionA[i];
    sumaB = sumaB + comisionB[i];
    sumaC = sumaC + comisionC[i];
  }
  promA = sumaA / comisionA.length;
  promB = sumaB / comisionB.length;
  promC = sumaC / comisionC.length;

  if (promA > promB && promA > promC) {
    console.log(
      " el mayor promedio es ",
      promA,
      " y corresponde a la comision A"
    );
  } else if (promB > promA && promB > promC) {
    console.log(
      "el mayor promedio es ",
      promB,
      " y corresponde a la comision B"
    );
  } else {
    console.log(
      "el mayor promedio es ",
      promC,
      "y corresponde a la comision C"
    );
  }
}

function menorProm() {
  let sumaA: number = 0;
  let sumaB: number = 0;
  let sumaC: number = 0;
  let promA: number = 0;
  let promB: number = 0;
  let promC: number = 0;
  for (let i: number = 0; i < comisionA.length; i++) {
    sumaA = sumaA + comisionA[i];
    sumaB = sumaB + comisionB[i];
    sumaC = sumaC + comisionC[i];
  }
  promA = sumaA / comisionA.length;
  promB = sumaB / comisionB.length;
  promC = sumaC / comisionC.length;

  if (promA < promB && promA < promC) {
    console.log(
      " el menor promedio es ",
      promA,
      " y corresponde a la comision A"
    );
  } else if (promB < promA && promB < promC) {
    console.log(
      "el menor promedio es ",
      promB,
      " y corresponde a la comision B"
    );
  } else {
    console.log(
      "el menor promedio es ",
      promC,
      "y corresponde a la comision C"
    );
  }
}

function desaprobados() {
  let desaprobadosA: number = 0;
  let desaprobadosB: number = 0;
  let desaprobadosC: number = 0;

  for (let i: number = 0; i < comisionA.length; i++) {
    if (comisionA[i] < 6) {
      desaprobadosA = desaprobadosA + 1;
    }
    if (comisionB[i] < 6) {
      desaprobadosB = desaprobadosB + 1;
    }
    if (comisionC[i] < 6) {
      desaprobadosC = desaprobadosC + 1;
    }
  }
  console.log(
    "la cantidad de desaprobados de la comision A es ",
    desaprobadosA
  );
  console.log("la cantidad de desaprobados de la comision B es", desaprobadosB);
  console.log("la cantidad de desaprobados de la comision C es", desaprobadosC);
}

function menorNota() {
  let menorA: number = comisionA[0];
  let menorB: number = comisionB[0];
  let menorC: number = comisionC[0];
  for (let i: number = 0; i < comisionA.length; i++) {
    if (comisionA[i] < menorA) {
      menorA = comisionA[i];
    }
    if (comisionB[i] < menorB) {
      menorB = comisionB[i];
    }
    if (comisionC[i] < menorC) {
      menorC = comisionC[i];
    }
  }
  console.log(" la menor nota de la comision A es", menorA);
  console.log("la menor nota de la comision B es ", menorB);
  console.log(" la menor nota de la comision C es ", menorC);
}
mayorProm();
menorProm();
desaprobados();
menorNota();
