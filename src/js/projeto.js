document.getElementById('meuBotao').addEventListener('click', function() {
    var audio = document.getElementById('meuAudio');
    audio.play(); // Toca o áudio
    setTimeout(function() {
        window.location.href = 'Diario2.html'; // Redireciona após 1000 ms (1 segundos)
    }, 1000); // Tempo de espera para o som iniciar
});
