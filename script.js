
// Botón de reproducción y pausa del reproductor de música
const tituloCancion = document.querySelector(".reproductor-musica h1");
const nombreCancion = document.querySelector(".reproductor-musica p");

const progreso = document.getElementById("progreso");
const cancion = document.getElementById("cancion");

const iconoControl = document.getElementById("iconoControl");
const botonReproducirPausar = document.querySelector(".controles .boton-reproducir-pausar");

// Elementos para mostrar el tiempo
const tiempoActual = document.getElementById("tiempoActual");
const duracionTotal = document.getElementById("duracionTotal");

// Fecha de la boda
const weddingDate = new Date("December 29, 2024 16:00:00").getTime();

// Actualizar la cuenta regresiva cada segundo
const countdownFunction = setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Cálculo del tiempo restante
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar el resultado
    document.getElementById("countdown").innerHTML = days + " días " + hours + " horas " + minutes + " minutos " + seconds + " segundos";

    // Si la cuenta regresiva termina
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "¡Ya es el día de la boda!";
    }
}, 1000);

// Mostrar la fecha exacta de la boda
document.getElementById("wedding-date").innerHTML = "Día de la boda: Domingo, 29 de Diciembre, 2024";

const canciones = [
    {
        titulo: "Thinking Out Loud",
        nombre: "Ed Sheeran",
        url: "audio/Ed Sheeran - Thinking out Loud.mp3"
    },
];

// Cargar la canción en el reproductor
canciones.forEach(cancion => {
    tituloCancion.innerHTML = cancion.titulo;
    nombreCancion.innerHTML = cancion.nombre;
    cancion.src = cancion.url; // Asegúrate de usar `url` en lugar de `fuente`
});

cancion.addEventListener("loadedmetadata", function () {
    progreso.max = cancion.duration;
    progreso.value = cancion.currentTime;

    // Actualiza la duración total
    const duracionMinutos = Math.floor(cancion.duration / 60);
    const duracionSegundos = Math.floor(cancion.duration % 60);
    duracionTotal.innerHTML = `${duracionMinutos}:${duracionSegundos < 10 ? '0' : ''}${duracionSegundos}`; // Formato mm:ss
});

botonReproducirPausar.addEventListener("click", reproducirPausar);

function reproducirPausar() {
    if (cancion.paused) {
        reproducirCancion();
    } else {
        pausarCancion();
    }
};

function reproducirCancion() {
    cancion.play();
    iconoControl.classList.add("bi-pause-fill");
    iconoControl.classList.remove("bi-play-fill");
}

function pausarCancion() {
    cancion.pause();
    iconoControl.classList.remove("bi-pause-fill");
    iconoControl.classList.add("bi-play-fill");
}

cancion.addEventListener("timeupdate", function () {
    if (!cancion.paused) {
        progreso.value = cancion.currentTime;

        // Actualiza el tiempo actual
        const tiempoMinutos = Math.floor(cancion.currentTime / 60);
        const tiempoSegundos = Math.floor(cancion.currentTime % 60);
        tiempoActual.innerHTML = `${tiempoMinutos}:${tiempoSegundos < 10 ? '0' : ''}${tiempoSegundos}`; // Formato mm:ss
    }
});

progreso.addEventListener("input", function () {
    cancion.currentTime = progreso.value;
});

progreso.addEventListener("change", function () {
    reproducirCancion();
});

// Mostrar el popup al cargar la página
window.onload = function () {
    const popup = document.getElementById("popup");
    popup.style.display = "flex"; // Asegúrate de que se muestre

    document.getElementById("abrir-invitacion").addEventListener("click", function () {
        // Agregar clase para el efecto de cierre
        popup.classList.add("popup-hidden");

        // Esperar el tiempo de animación antes de ocultar completamente
        setTimeout(() => {
            popup.style.display = "none";
        }, 500); // Tiempo que coincide con el tiempo de la transición
    });
};

// Botón para guardar en calendario
document.getElementById('calendar-btn').addEventListener('click', function () {
    window.open('https://www.google.com/calendar/render?action=TEMPLATE&text=Boda+de+Mitchel+y+Carlos&dates=20241229T160000Z/20241229T190000Z&details=Te+invitamos+a+nuestra+boda!&location=Calle+José+Martí,+Colonia+Escalón+San+Salvador', '_blank');
});


