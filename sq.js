const boxx = document.getElementById('boxx');
const switchingcolorr = document.getElementById('switchingcolorr');
const colors = ["red", "green", "blue", "pink", "yellow", "turquoise"];
let i = 0;


switchingcolorr.addEventListener('click', ()=>{
    boxx.style.backgroundColor = colors[i];
    console.log(i);
    i++;

    if(i==6) {
        i = 0;
    }

});

