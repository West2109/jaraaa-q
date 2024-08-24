const letterContent = "jangan lupa minum vitamin yaaa, walaupun suda tida paskib lagi harus tetep minum biar kuat kaya galpin!!! :D\n06:10";
let index = 0;

function typeLetter() {
    if (index < letterContent.length) {
        document.getElementById("loveLetter").innerHTML += letterContent.charAt(index);
        index++;
        setTimeout(typeLetter, 50);
    }
}

window.onload = typeLetter;
