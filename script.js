const mensajes = [
  "💛 Para mi persona más especial...",
  "🌸 Cada día contigo es un regalo hermoso.",
  "✨ Eres mi alegría, mi paz y mi inspiración.",
  "💕 Quiero que sepas que siempre estaré para ti.",
  "🙈 Ojo, no andes en Halloween con ropa muy corta, jeje 💕",
  "🌹 Y muy pronto llegará un regalo lleno de amor... 🎁💝",
  "💖 Abby, te amo mucho :3"
];

let i = 0; // índice del mensaje
let j = 0; // índice de la letra
let velocidad = 80; // velocidad del efecto
let mensajeActual = "";
let escribiendo = true;
const span = document.getElementById("mensaje");

function escribir() {
  if (i < mensajes.length) {
    if (j < mensajes[i].length) {
      mensajeActual += mensajes[i][j];
      span.textContent = mensajeActual;
      j++;
      setTimeout(escribir, velocidad);
    } else {
      escribiendo = false;

      // Si es el último mensaje, no borrar
      if (i === mensajes.length - 1) {
        return;
      }

      setTimeout(borrar, 2000);
    }
  }
}

function borrar() {
  if (!escribiendo) {
    if (j > 0) {
      mensajeActual = mensajeActual.slice(0, -1);
      span.textContent = mensajeActual;
      j--;
      setTimeout(borrar, 40);
    } else {
      escribiendo = true;
      i++;
      mensajeActual = "";
      setTimeout(escribir, 500);
    }
  }
}

escribir();

// Corazones flotantes
function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");
  corazon.textContent = "❤";
  document.body.appendChild(corazon);
  corazon.style.left = Math.random() * window.innerWidth + "px";
  corazon.style.fontSize = (Math.random() * 20 + 20) + "px";
  setTimeout(() => corazon.remove(), 6000);
}
setInterval(crearCorazon, 800);