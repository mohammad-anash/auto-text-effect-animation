let heading = document.querySelector('.heading');

let words = ['youtuber', 'web developer', 'web desiger', 'video editor']
let wrodsindex = 0;
let characterindex = 0;

function myfunction() {
    characterindex++
    heading.innerHTML = `<h1>I, am a ${words[wrodsindex].slice(0, characterindex)}</h1>`
    if (characterindex === words[wrodsindex].length) {
        wrodsindex++
        characterindex = 0;
    }
    setTimeout(myfunction, 400);
}

myfunction();