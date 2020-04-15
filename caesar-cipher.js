const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var shift = 0;

//call encryption and shifted alphabet
function encrypt() {
    encryption();
    shiftedAlphabet_encryt();
}

//call decryption and shifted alphabet
function decrypt() {
    decryption();
    shiftedAlphabet_decryt();
}

//encrypt the text
function encryption() {
    decryptedText = document.getElementById("caesar_text").value;
    shift = document.getElementById("shift_amount").value;

    encryptedText = "";

    shift = parseInt(shift);

    var str = decryptedText.toUpperCase();

    for (var i = 0; i < str.length; i++) {
        if (alphabet.includes(str[i])) {
            var j = alphabet.indexOf(str[i]);
            j += shift;
            if (j > 25) {
                j = j - 26;
            }

            encryptedText += alphabet[j];
        } else {
            encryptedText += str[i];
        }
    }

    document.getElementById("result").value = encryptedText;
}

//decrypt the text
function decryption() {
    encryptedText = document.getElementById("caesar_text").value;
    shift = document.getElementById("shift_amount").value;

    decryptedText = "";

    shift = parseInt(shift);

    var str = encryptedText.toUpperCase();

    for (var i = 0; i < str.length; i++) {
        if (alphabet.includes(str[i])) {
            var j = alphabet.indexOf(str[i]);

            j += 26 - shift;

            if (j > 25) {
                j = j - 26;
            }

            decryptedText += alphabet[j];
        } else {
            decryptedText += str[i];
        }
    }

    document.getElementById("result").value = decryptedText;
}

//shifted alphabet for encryption
function shiftedAlphabet_encryt() {
    var output = "";
    shift = document.getElementById("shift_amount").value;
    shift = parseInt(shift);
    var indx = 0;
    var newChar = "";
    for (var i = 0; i < 26; i++) {
        indx = alphabet.indexOf(alphabet[i]);
        newChar = alphabet[(indx + shift) % alphabet.length];
        output += alphabet[i] + " ↠ " + newChar + "<br>";
    }

    document.getElementById("shifted_alphabet_result").innerHTML = output;
}
//shifted alphabet for decryption
function shiftedAlphabet_decryt() {
    var output = "";
    shift = document.getElementById("shift_amount").value;
    shift = parseInt(shift);
    var indx = 0;
    var newChar = "";
    for (var i = 0; i < 26; i++) {
        indx = alphabet.indexOf(alphabet[i]);
        newChar = alphabet[(indx - shift + alphabet.length) % alphabet.length];
        output += alphabet[i] + " ↠ " + newChar + "<br>";
    }

    document.getElementById("shifted_alphabet_result").innerHTML = output;
}
