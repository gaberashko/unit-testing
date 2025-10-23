// Takes an array of numbers and returns its average, min, max, and length.
function analyzeArray(arr) {
    let average = 0,
        min = null,
        max = null,
        length = 0;

    if (!Array.isArray(arr))
        throw new Error("Argument passed is not an iterable object");

    for (item of arr) {
        if (typeof item !== "number")
            throw new Error("Invalid data type in array.");
        if (!min) {
            min = max = item;
        } else {
            min = item < min ? item : min;
            max = item > max ? item : max;
        }
        average += item;
        ++length;
    }
    average = length === 0 ? 0 : average / length;

    return { average, min, max, length };
}

export { analyzeArray };
