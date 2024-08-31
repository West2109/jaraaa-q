const letterContent = "good eveningg!\n\njaga kesehatan bocill <3\njangan lupa ceritaa klo ada apa apa yaaw!\n\n08/31/2024 06:40 PM";
let index = 0;

function typeLetter() {
    if (index < letterContent.length) {
        document.getElementById("loveLetter").innerHTML += letterContent.charAt(index);
        index++;
        setTimeout(typeLetter, 50);
    }
}

window.onload = typeLetter;
