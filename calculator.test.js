import { calculator } from "./calculator.js";

test("Initialize calculator object", () => {
    expect(() => {
        let calc = calculator();
    }).not.toThrow();
});

// ADDITION TESTS

test("Test addition with no arguments", () => {
    const calc = calculator();
    expect(() => {
        calc.add();
    }).toThrow();
});

test("Test addition with null arguments", () => {
    const calc = calculator();
    const [n1, n2] = [null, null];
    expect(() => {
        calc.add(n1, n2);
    }).toThrow();
});

test("Test addition with non-numerical arguments", () => {
    const calc = calculator();
    const [n1, n2] = ["2", "1"];
    const [n3, n4] = ["abc", ""];
    expect(() => {
        calc.add(n1, n2);
    }).toThrow();
    expect(() => {
        calc.add(n3, n4);
    }).toThrow();
});

test("Test addition with 1 argument", () => {
    const calc = calculator();
    const n1 = 1;
    expect(() => {
        calc.add(n1);
    }).toThrow();
});

test("Test addition with valid numerical arguments", () => {
    const calc = calculator();
    const [n1, n2] = [50, -15];
    expect(calc.add(n1, n2)).toBe(35);
});

// SUBTRACTION TESTS

test("Test subtraction with no arguments", () => {
    const calc = calculator();
    expect(() => {
        calc.subtract();
    }).toThrow();
});

test("Test subtraction with null arguments", () => {
    const calc = calculator();
    const [n1, n2] = [null, null];
    expect(() => {
        calc.subtract(n1, n2);
    }).toThrow();
});

test("Test subtraction with non-numerical arguments", () => {
    const calc = calculator();
    const [n1, n2] = ["2", "1"];
    const [n3, n4] = ["abc", ""];
    expect(() => {
        calc.subtract(n1, n2);
    }).toThrow();
    expect(() => {
        calc.subtract(n3, n4);
    }).toThrow();
});

test("Test subtraction with 1 argument", () => {
    const calc = calculator();
    const n1 = 1;
    expect(() => {
        calc.subtract(n1);
    }).toThrow();
});

test("Test subtraction with valid numerical arguments", () => {
    const calc = calculator();
    const [n1, n2] = [50, -15];
    expect(calc.subtract(n1, n2)).toBe(65);
});

// MULTIPLICATION TESTS

test("Test multiplication with no arguments", () => {
    const calc = calculator();
    expect(() => {
        calc.multiply();
    }).toThrow();
});

test("Test multiplication with null arguments", () => {
    const calc = calculator();
    const [n1, n2] = [null, null];
    expect(() => {
        calc.multiply(n1, n2);
    }).toThrow();
});

test("Test multiplication with non-numerical arguments", () => {
    const calc = calculator();
    const [n1, n2] = ["2", "1"];
    const [n3, n4] = ["abc", ""];
    expect(() => {
        calc.multiply(n1, n2);
    }).toThrow();
    expect(() => {
        calc.multiply(n3, n4);
    }).toThrow();
});

test("Test multiplication with 1 argument", () => {
    const calc = calculator();
    const n1 = 1;
    expect(() => {
        calc.multiply(n1);
    }).toThrow();
});

test("Test multiplication with valid numerical arguments", () => {
    const calc = calculator();
    const [n1, n2] = [6, 7];
    expect(calc.multiply(n1, n2)).toBe(42);
});

test("Test multiplication with 0", () => {
    const calc = calculator();
    const [n1, n2] = [0, 32];
    expect(calc.multiply(n1, n2)).toBe(0);
});

test("Test multiplication with 1", () => {
    const calc = calculator();
    const [n1, n2] = [1, -9];
    expect(calc.multiply(n1, n2)).toBe(-9);
});

// DIVISION TESTS

test("Test division with no arguments", () => {
    const calc = calculator();
    expect(() => {
        calc.divide();
    }).toThrow();
});

test("Test division with null arguments", () => {
    const calc = calculator();
    const [n1, n2] = [null, null];
    expect(() => {
        calc.divide(n1, n2);
    }).toThrow();
});

test("Test division with non-numerical arguments", () => {
    const calc = calculator();
    const [n1, n2] = ["2", "1"];
    const [n3, n4] = ["abc", ""];
    expect(() => {
        calc.divide(n1, n2);
    }).toThrow();
    expect(() => {
        calc.divide(n3, n4);
    }).toThrow();
});

test("Test division with 1 argument", () => {
    const calc = calculator();
    const n1 = 1;
    expect(() => {
        calc.divide(n1);
    }).toThrow();
});

test("Test division with valid numerical arguments", () => {
    const calc = calculator();
    const [n1, n2] = [35, 5];
    expect(calc.divide(n1, n2)).toBe(7);
});

test("Test division by 0", () => {
    const calc = calculator();
    const [n1, n2] = [35, 0];
    expect(() => {
        calc.divide(n1, n2);
    }).toThrow();

    expect(calc.divide(n2, n1)).toBe(0);
});
