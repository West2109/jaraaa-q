const letterContent = "haii jaraa!,\n\njangan lupa minum vitamin yaaa, walaupun suda tida paskib lagi harus tetep minum biar kuat kaya galpin!!! :D\n\n06:11 PM";
let index = 0;

function typeLetter() {
    if (index < letterContent.length) {
        document.getElementById("loveLetter").innerHTML += letterContent.charAt(index);
        index++;
        setTimeout(typeLetter, 50);
    }
}

window.onload = typeLetter;
