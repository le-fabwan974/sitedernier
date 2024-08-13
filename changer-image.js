document.addEventListener('DOMContentLoaded', function() {
    const imageDisplay = document.getElementById('imageDisplay');
    const changeImageButton = document.getElementById('changeImageButton');
    const message = document.getElementById('message');

    const images = [
        'https://i.ibb.co/0YBHC8v/14153810-cadenas-en-forme-de-coeur-avec-icone-de-dessin-anime-cle-vectoriel-removebg-preview.png',
        'https://lh5.googleusercontent.com/proxy/AweotFzn0CX2xAX6YvX26mm02EgYVQ1RnvbT2WUv60mgY-U6iSy3JV2AuFf5OR5Yt2lPpxxTUzrLwe8XypNG8aIfXU41jRNRbBJZUA4'
    ];

    let currentIndex = 0;

    changeImageButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        imageDisplay.src = images[currentIndex];
        changeImageButton.style.display = 'none';
        message.classList.remove('hidden');
    });
});
