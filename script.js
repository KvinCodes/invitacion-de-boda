
    // Fecha de la boda
    const weddingDate = new Date("December 29, 2024 16:00:00").getTime();

    // Actualizar la cuenta regresiva cada segundo
    const countdownFunction = setInterval(function() {
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

    // Botón de reproducción y pausa del reproductor de música
    const tituloCancion = document.querySelector(".reproductor-musica h1");
    const nombreCancion = document.querySelector(".reproductor-musica p");

    const progreso = document.getElementById("progreso");
    const cancion = document.getElementById("cancion");

    const iconoControl = document.getElementById("iconoControl");
    const botonReproducirPausar = document.querySelector(".controles .boton-reproducir-pausar");

    const canciones = [
        {
            titulo: "Thinking Out Loud",
            nombre: "Ed Sheeran",
            url: "audio/Ed Sheeran - Thinking out Loud.mp3"
        },
    ];

    canciones.forEach(cancion => {
        tituloCancion.innerHTML = cancion.titulo;
        nombreCancion.innerHTML = cancion.nombre;
        cancion.src = cancion.fuente;
    });

    cancion.addEventListener("loadedmetadata", function() {
        progreso.max = cancion.duration;
        progreso.value = cancion.currentTime;
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

    cancion.addEventListener("timeupdate", function() {
        if(!cancion.paused) {
            progreso.value = cancion.currentTime;
        }
    });

    progreso.addEventListener("input", function() {
        cancion.currentTime = progreso.value;
    });

    progreso.addEventListener("change", function() {
        reproducirCancion();
    });