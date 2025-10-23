// Performs a Caesar cipher on the given string using a specified shift factor.
function caesarCipher(str = "", shiftFactor = 1) {
    // Returns whether the argument is a letter. Expects string of length 1.
    function isLetter(char) {
        return char.length === 1 && RegExp(/^\p{L}/, "u").test(char);
    }

    // Returns the shifted character.
    function shiftLetter(char, shiftFactor) {
        const ascii = char.charCodeAt(0);
        let shiftAmount;
        let finalCharCode;
        // char is lowercase
        if (ascii > upperEnd) {
            shiftAmount = (ascii - lowerStart + shiftFactor) % ALPHABET_SIZE;
            finalCharCode = lowerStart + shiftAmount;
        } else {
            // char is uppercase
            shiftAmount = (ascii - upperStart + shiftFactor) % ALPHABET_SIZE;
            finalCharCode = upperStart + shiftAmount;
        }
        return String.fromCharCode(finalCharCode);
    }

    const [lowerStart, lowerEnd] = ["a".charCodeAt(0), "z".charCodeAt(0)];
    const [upperStart, upperEnd] = ["A".charCodeAt(0), "Z".charCodeAt(0)];
    const ALPHABET_SIZE = 26;

    // It doesn't matter past alphabet size how much we shift it.
    shiftFactor %= ALPHABET_SIZE;
    let stringArr = Array.from(str);

    // Don't allow negative shifts.
    if (shiftFactor < 0) {
        throw new Error("Negative shift argument");
    }

    // Verify inputs are correct type.
    if (typeof str !== "string" || typeof shiftFactor !== "number")
        throw new Error("Invalid argument type");

    // Iterate through each character in the string.
    for (let i = 0; i < stringArr.length; ++i) {
        // If it is a letter, shift it.
        if (isLetter(stringArr[i])) {
            stringArr[i] = shiftLetter(stringArr[i], shiftFactor);
        }
    }
    return stringArr.join("");
}

export { caesarCipher };
