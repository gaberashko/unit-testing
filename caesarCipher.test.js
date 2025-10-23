import { caesarCipher } from "./caesarCipher.js";

test("No arguments returns empty string", () => {
    expect(caesarCipher()).toMatch("");
});

test("Invalid argument types throw error", () => {
    expect(() => {
        caesarCipher(null, null);
    }).toThrow();
});

test("Negative shift factor throws error", () => {
    expect(() => {
        const str = "abc";
        caesarCipher(str, -1);
    }).toThrow();
});

test("0 shift factor returns same string.", () => {
    const str = "abc";
    expect(caesarCipher(str, 0)).toMatch(str);
});

test("Shifting empty string returns empty string", () => {
    const empty = "";
    expect(caesarCipher(empty, null)).toMatch("");
});

test("Default shift (shifts 1 letter)", () => {
    const str = "abc";
    expect(caesarCipher(str)).toMatch("bcd");
});

test("Specified shift of lowercase string", () => {
    const str = "abc";
    expect(caesarCipher(str, 3)).toMatch("def");
});

test("Shift preserves letter case", () => {
    const str = "Hello";
    expect(caesarCipher(str)).toMatch("Ifmmp");
});

test("Full rotation returns match", () => {
    const str = "Hello";
    expect(caesarCipher(str, 26)).toMatch("Hello");
    expect(caesarCipher(str, 52)).toMatch("Hello");
});

test("Positive shift wraps lowercase", () => {
    const str = "z";
    expect(caesarCipher(str)).toMatch("a");
});

test("Positive shift wraps uppercase", () => {
    const str = "Z";
    expect(caesarCipher(str)).toMatch("A");
});

test("Case preservation with wrap-around positive", () => {
    const str = "xYz";
    expect(caesarCipher(str, 3)).toMatch("aBc");
});
