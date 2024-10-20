const changebackgroundBtn = document.getElementById('changebackgroundBtn');
const stopmusicBtn = document.getElementById('stopmusicBtn');
const dancemusic = document.getElementById('dancemusic');

//Using external links for the image and music
changebackgroundBtn.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('tyr2.jpg')";
    document.body.style.backgroundSize = "auto";
    document.body.style.backgroundRepeat = "repeat";
    document.body.style.height = "200vh"; 
    
    dancemusic.play(); // Play the music when the background is changed
});

 stopmusicBtn.addEventListener('click', function() {
    dancemusic.pause(); // Pause the music
    dancemusic.currentTime = 0; // Reset the music to the beginning
});


// const changebackgroundBtn = document.getElementById('changebackgroundBtn');
// const stopmusicBtn = document.getElementById('stopmusicBtn');
// const dancemusic = document.getElementById('dancemusic');

// changebackgroundBtn.addEventListener('click', function() {
//     document.body.style.backgroundImage = "url('R.jpeg')";
//     document.body.style.backgroundSize = "auto";
//     document.body.style.backgroundRepeat = "repeat";
//     document.body.style.height = "200vh"; 

//     console.log("Trying to play music...");
//     dancemusic.muted = false; // Ensure it's not muted
//     dancemusic.play().then(() => {
//         changebackgroundBtn.disabled = true; // Disable button if music plays
//     }).catch(error => {
//         console.error("Playback error:", error);
//     });
// });

// stopmusicBtn.addEventListener('click', function() {
//     dancemusic.pause();
//     dancemusic.currentTime = 0;
//     changebackgroundBtn.disabled = false; // Re-enable button
// });
