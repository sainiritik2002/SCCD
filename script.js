function caesarCipherDecoder(encodedText, shift) {
    let decodedText = "";

    for (let i = 0; i < encodedText.length; i++) {
        let char = encodedText[i];

        if (char.match(/[A-Za-z]/)) {
            
            if (char.toUpperCase() === char) {
                decodedText += String.fromCharCode(((encodedText.charCodeAt(i) - shift - 65 + 26) % 26) + 65);
            } 
            
            else {
                decodedText += String.fromCharCode(((encodedText.charCodeAt(i) - shift - 97 + 26) % 26) + 97);
            }
        } else {
            // If the character is not a letter, leave it unchanged (e.g., punctuation, spaces)
            decodedText += char;
        }
    }

    return decodedText;
}

function decodeCipher() {
    const encodedText = document.getElementById("encodedText").value;
    const shiftValue = parseInt(document.getElementById("shiftValue").value);

    if (encodedText === "" || isNaN(shiftValue)) {
        alert("Please enter both encoded text and a valid shift value.");
        return;
    }

    
    const decodedMessage = caesarCipherDecoder(encodedText, shiftValue);

    
    document.getElementById("decodedMessage").textContent = decodedMessage;
}
