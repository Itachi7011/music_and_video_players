
document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('fileInput');
    const playlist = document.getElementById('playlist');
    const audioPlayer = document.getElementById('audioPlayer');
    
    fileInput.addEventListener('change', function(event) {
        playlist.innerHTML = ''; // Clear existing playlist
        
        const files = event.target.files;
        
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const audioURL = URL.createObjectURL(file);
            const audioItem = document.createElement('div');
            audioItem.classList.add('audio-item');
            audioItem.innerHTML = `
                <span>${file.name}</span>
                <button class="play-btn" data-url="${audioURL}" style={font-size:larger} > Play </button>
            `;
            playlist.appendChild(audioItem);
        }
    });

    playlist.addEventListener('click', function(event) {
        if (event.target.classList.contains('play-btn')) {
            const audioURL = event.target.getAttribute('data-url');
            audioPlayer.src = audioURL;
            audioPlayer.play();
        }
    });
});
