document.addEventListener('DOMContentLoaded', () => {
    let birthdayCard = document.querySelector('.birthdayCard');
    let enterAudio = document.getElementById('enterAudio');
    let leaveAudio = document.getElementById('leaveAudio');

    if (birthdayCard && enterAudio && leaveAudio) {
        console.log("Elementos encontrados:");
        console.log(birthdayCard, enterAudio, leaveAudio);

        birthdayCard.addEventListener('mouseenter', () => {
            console.log("Mouse entrou no cartão");
            enterAudio.play().catch(error => console.error("Erro ao tocar áudio de entrada:", error));
        });

        birthdayCard.addEventListener('mouseleave', () => {
            console.log("Mouse saiu do cartão");
            leaveAudio.play().catch(error => console.error("Erro ao tocar áudio de saída:", error));
        });
    } else {
        console.error("Erro: Um ou mais elementos não foram encontrados no DOM.");
    }
});
