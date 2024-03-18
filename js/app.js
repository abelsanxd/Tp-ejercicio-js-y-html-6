let temporizador;
let tiempoRestante;

function iniciarTemporizador(tiempoInicial) {
  tiempoRestante = tiempoInicial;
  actualizarTemporizador();

  temporizador = setInterval(function() {
    tiempoRestante--;
    if (tiempoRestante < 0) {
      pausarTemporizador();
      alert("¡Tiempo terminado!");
    } else {
      actualizarTemporizador();
    }
  }, 1000);
}

function pausarTemporizador() {
  clearInterval(temporizador);
}

function resetearTemporizador() {
  clearInterval(temporizador);
  document.getElementById("inputTiempo").disabled = false;
  document.getElementById("btnIniciar").disabled = false;
  document.getElementById("btnPausar").disabled = true;
  tiempoRestante = 0;
  actualizarTemporizador();
}

function actualizarTemporizador() {
  const minutos = Math.floor(tiempoRestante / 60);
  const segundos = tiempoRestante % 60;
  const minutosFormateados = minutos < 10 ? "0" + minutos : minutos;
  const segundosFormateados = segundos < 10 ? "0" + segundos : segundos;

  document.getElementById("temporizador").textContent = `${minutosFormateados}:${segundosFormateados}`;
}

document.getElementById("btnIniciar").addEventListener("click", function() {
  const tiempoInicial = parseInt(document.getElementById("inputTiempo").value);
  if (tiempoInicial > 0) {
    iniciarTemporizador(tiempoInicial);
    document.getElementById("inputTiempo").disabled = true;
    document.getElementById("btnIniciar").disabled = true;
    document.getElementById("btnPausar").disabled = false;
  } else {
    alert("Ingrese un tiempo válido (mayor que 0).");
  }
});

document.getElementById("btnPausar").addEventListener("click", function() {
  pausarTemporizador();
  document.getElementById("btnIniciar").disabled = false;
  document.getElementById("btnPausar").disabled = true;
});

document.getElementById("btnReset").addEventListener("click", function() {
  resetearTemporizador();
});
