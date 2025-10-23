import { capitalize } from "./capitalize.js";

test("Non-string type throws error", () => {
    const nullStr = null;
    expect(() => capitalize(nullStr)).toThrow();
});

test("Empty string argument returns empty string", () => {
    const emptyStr = "";
    expect(capitalize(emptyStr)).toMatch("");
});

test("Number first letter returns identical string", () => {
    const str = "1hello";
    expect(capitalize(str)).toMatch(str);
});

test("Special character first letter returns identical string", () => {
    const str = ";hello";
    expect(capitalize(str)).toMatch(str);
});

test("One letter character capitalizes", () => {
    const str = "b";
    expect(capitalize(str)).toMatch("B");
});

test("Multi-letter character string capitalizes", () => {
    const str = "capitalized";
    expect(capitalize(str)).toMatch("Capitalized");
});
