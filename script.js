const CALCULAR = document.getElementById("calcular");
const ERROR = document.getElementById("error");
const DIA = document.getElementById("dia");
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man");

CALCULAR.addEventListener("click", calcular);

function calcular() {
  let peso = document.getElementById('peso').valueAsNumber;

  if (isNaN(peso)) {
    ERROR.innerHTML = "Debe completar todos los datos";
    ERROR.style.display = "block";
    FLU.style.display = "none";
    MAN.style.display = "none";
    DIA.style.display = "none";
  } else {
    ERROR.style.display = "none";

    if (peso <= 30) {
      DIA.innerHTML = "Diario: " + segar(peso) + " cc";
      DIA.style.display = "block";
      FLU.innerHTML = "Man: " + (segar(peso) / 24).toFixed(2) + " cc/hr";
      FLU.style.display = "block";
      MAN.innerHTML = "Man+Man/2: " + segar(peso) * 1.5 + " cc";
      MAN.style.display = "block";
    } else {
      FLU.innerHTML = "SC * 1500: " + (superficie(peso) * 1500).toFixed(2) + " cc";
      FLU.style.display = "block";
      MAN.innerHTML = "SC * 2000: " + superficie(peso) * 2000 + " cc";
      MAN.style.display = "block";
    }
  }
}

function superficie(valor) {
  return ((valor * 4) + 7) / (valor + 90);
}

function segar(valor) {
  let resultado;

  if (valor > 20) {
    resultado = 1500 + ((valor - 20) * 20);
  } else if (valor > 10) {
    resultado = 1000 + ((valor - 10) * 50);
  } else {
    resultado = valor * 100;
  }

  return resultado;
}





//recibir peso  => let peso = 25
// si  el peso <= 30: usar hollyiday segar => if (peso <=30 ) { }
// if peso (peso <= 30) { SEGAR (peso)
// }

