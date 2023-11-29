/*
# Absolute Value Inequality
- Use Katex to express functions
- return[0] or question is an array for multi-line questions like ["Description of the question","Equation of the question*&&……@#……！*"]
- return[1] or answer can be, for example: 1, "z=2", ...; 
- Use a comma to separate two answers directly
- (min, max) are the minimum and maximum random ranges for coefficients

Example:
- |2x + 3| > 5 Solution: x < -4, x > 2
    - Katex: |2x + 3| > 5 Solution:
- |2x-1| + |x+2| < 5 Solution: (-4/3) < x < 3
    - Katex: |2x-1| + |x+2| < 5  Solution: -\frac{4}{3} < x < 3
*/

$X.math.Middle_School_Mathematics.Algebra.Absolute_value_inequality = function (min, max) {
    // Function for finding the greatest common divisor
    function gcd(a, b) {
        if (!b) {
            return a;
        }
        return gcd(b, a % b);
    }

    // Function for simplifying fractions
    function simplifyFraction(numerator, denominator) {
        const divisor = gcd(numerator, denominator);
        return `${numerator / divisor}\\/${denominator / divisor}`;
    }

    // Generate random coefficients
    const a = Math.floor(Math.random() * (max - min + 1)) + min;
    const b = Math.floor(Math.random() * (max - min + 1)) + min;

    // Generate the inequality
    const option = Math.random() < 0.5 ? ">" : "<";
    const constant = Math.floor(Math.random() * (max - min + 1)) + min;
    const question = ["Solve the absolute value inequality: ", `|${a}x + ${b}| ${option} ${constant}`];

    // Solve the inequality
    let answer;
    if (option === ">") {
        if (a > 0) {
            let firstValue = simplifyFraction(Math.abs(-b - constant), Math.abs(a));
            let secondValue = simplifyFraction(Math.abs(-b + constant), Math.abs(a));
            answer = `${-b - constant < 0 ? "-" : ""}${firstValue}, ${-b + constant < 0 ? "-" : ""}${secondValue}`;
        } else if (a < 0) {
            let firstValue = simplifyFraction(Math.abs(-b + constant), Math.abs(a));
            let secondValue = simplifyFraction(Math.abs(-b - constant), Math.abs(a));
            answer = `${-b + constant < 0 ? "-" : ""}${firstValue}, ${-b - constant < 0 ? "-" : ""}${secondValue}`;
        } else {
            answer = "\\emptyset";
        }
    } else {
        if (a > 0) {
            let firstValue = simplifyFraction(Math.abs(-b - constant), Math.abs(a));
            let secondValue = simplifyFraction(Math.abs(-b + constant), Math.abs(a));
            answer = `${-b - constant < 0 ? "-" : ""}${firstValue} < x < ${-b + constant < 0 ? "-" : ""}${secondValue}`;
        } else if (a < 0) {
            let firstValue = simplifyFraction(Math.abs(-b + constant), Math.abs(a));
            let secondValue = simplifyFraction(Math.abs(-b - constant), Math.abs(a));
            answer = `${-b + constant < 0 ? "-" : ""}${firstValue} < x < ${-b - constant < 0 ? "-" : ""}${secondValue}`;
        } else {
            answer = "\\emptyset";
        }
    }

    return [question, answer];
}
