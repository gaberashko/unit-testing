// Takes a string argument, and returns the string with the first character capitalized.
function capitalize(str) {
    if (typeof str !== "string")
        throw new Error("Argument is not of type string.");
    else {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

export { capitalize };
