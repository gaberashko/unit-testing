let calculator = () => {
    const add = (num1, num2) => {
        if (typeof num1 !== "number" || typeof num2 !== "number")
            throw new Error("Non-numerical argument passed");
        return num1 + num2;
    };
    const subtract = (num1, num2) => {
        if (typeof num1 !== "number" || typeof num2 !== "number")
            throw new Error("Non-numerical argument passed");
        return num1 - num2;
    };
    const divide = (num1, num2) => {
        if (typeof num1 !== "number" || typeof num2 !== "number")
            throw new Error("Non-numerical argument passed");
        if (num2 === 0) throw new Error("Division by 0");
        return num1 / num2;
    };
    const multiply = (num1, num2) => {
        if (typeof num1 !== "number" || typeof num2 !== "number")
            throw new Error("Non-numerical argument passed");
        return num1 * num2;
    };

    return { add, subtract, divide, multiply };
};

export { calculator };
