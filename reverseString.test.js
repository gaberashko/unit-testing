import { reverseString } from "./reverseString.js";

test("Non-string type throws error", () => {
    const nullStr = null;
    expect(() => reverseString(nullStr)).toThrow();
});

test("Empty string argument returns empty string", () => {
    const emptyStr = "";
    expect(reverseString(emptyStr)).toMatch("");
});

test("Single letter string returns identical string", () => {
    const str = "a";
    expect(reverseString(str)).toMatch(str);
});

test("Palindrome returns identical string", () => {
    const str = "racecar";
    expect(reverseString(str)).toMatch(str);
});

test("Normal string returns reverse.", () => {
    const str = "Hello";
    expect(reverseString(str)).toMatch("olleH");
});

test("Palindrome with different capitalization reverses.", () => {
    const strPalindrome = "Racecar";
    expect(reverseString(strPalindrome)).toMatch("racecaR");
});
