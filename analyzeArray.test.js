import { analyzeArray } from "./analyzeArray.js";

test("Empty array returns appropriate object", () => {
    const arr = [];
    expect(analyzeArray(arr)).toEqual({
        average: 0,
        min: null,
        max: null,
        length: 0,
    });
});

test("Non-array argument throws", () => {
    const arr = null;
    expect(() => {
        analyzeArray(arr);
    }).toThrow();
});

test("Array with non-number type throws", () => {
    const arr = [1, "balls", 15];
    expect(() => {
        analyzeArray(arr);
    }).toThrow();
});

test("One-number array returns properly", () => {
    const arr = [1];
    expect(analyzeArray(arr)).toEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 1,
    });
});

test("Array of positive values returns proper object", () => {
    const arr = [21, 1, 2];
    expect(analyzeArray(arr)).toEqual({
        average: 8,
        min: 1,
        max: 21,
        length: 3,
    });
});

test("Array of positive and negative values returns proper object", () => {
    const arr = [23, -1, -2, 0, 0];
    expect(analyzeArray(arr)).toEqual({
        average: 4,
        min: -2,
        max: 23,
        length: 5,
    });
});

test("Array of only negative values returns proper object", () => {
    const arr = [-5, -1, -2, -15, -3];
    expect(analyzeArray(arr)).toEqual({
        average: -5.2,
        min: -15,
        max: -1,
        length: 5,
    });
});

test("Array of 0s only returns proper object", () => {
    const arr = [0, 0, 0, 0, 0];
    expect(analyzeArray(arr)).toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 5,
    });
});
