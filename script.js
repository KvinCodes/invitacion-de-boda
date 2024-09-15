
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


    // Reproducir el audio cuando se presione el botón
    document.getElementById('audio-control').addEventListener('click', function() {
        var audio = document.getElementById('wedding-audio');
        if (audio.paused) {
            audio.play();
            this.classList.add('paused');
        } else {
            audio.pause();
            this.classList.remove('paused');
        }
    });
    