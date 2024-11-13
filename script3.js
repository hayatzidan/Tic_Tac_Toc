const changebackgroundBtn = document.getElementById('changebackgroundBtn');
const stopmusicBtn = document.getElementById('stopmusicBtn');
const dancemusic = document.getElementById('dancemusic');

//Using external links for the image and music
changebackgroundBtn.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('source.gif')";
    document.body.style.backgroundSize = "auto";
    document.body.style.backgroundRepeat = "repeat";
    document.body.style.height = "200vh"; 
    
    dancemusic.play(); // Play the music when the background is changed
});

 stopmusicBtn.addEventListener('click', function() {
    dancemusic.pause(); // Pause the music
    dancemusic.currentTime = 0; // Reset the music to the beginning
});


