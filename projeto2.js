document.getElementById('botaoVoltar').addEventListener('click', function() {
    var audio = document.getElementById('audioVoltar');
    audio.play(); // Toca o áudio
    setTimeout(function() {
        window.location.href = 'Diario.html'; // Redireciona para a primeira página
    }, 1000); // Tempo de espera para o som iniciar
});