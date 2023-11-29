/*
Complex numbers and complex functions

Inputs:
- C_operations (boolean): Determines if questions related to basic operations with complex numbers should be included.
- C_roots (boolean): Determines if questions related to finding roots of complex numbers should be included.
- C_complex_functions (boolean): Determines if questions related to complex functions should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to complex numbers and complex functions. It covers topics such as basic operations with complex numbers, finding roots of complex numbers, and understanding various complex functions. The questions may involve finding conjugates, computing complex roots, and analyzing the behavior of complex functions.

Example Usage:
const result = ComplexNumbersAndFunctions(true, true, false);
console.log(result); // Output: ['Perform the division of the complex numbers (3+4i) and (2-3i)...', 'The result of the division is ...']
*/

$X.math.University_Mathematics.Complex_Analysis.ComplexNumbersAndFunctions = function (C_operations, C_roots, C_complex_functions) {
	// Your code goes here
	if (C_operations) {
		const operations = ["addition", "subtraction", "multiplication", "division"];
		const constant1 = Math.ceil(Math.random() * 9);
		const constant2 = Math.ceil(Math.random() * 9);
		const complexNum1 = Math.ceil(Math.random() * 9);
		const complexNum2 = Math.ceil(Math.random() * 9);
		const randOper = Math.floor(Math.random() * operations.length);
		var question;
		var answer;
		if (randOper == 0) {
			var newConstant = constant1 + constant2;
			var newComplexNum = complexNum1 + complexNum2;
			question = "Perform the " + operations[randOper] + " on the complex numbers (" + constant1 + "+" + complexNum1 + "i) and (" + constant2 + "+" + complexNum2 + "i)";
			answer = "The result of the " + operations[randOper] + " is (" + `${newConstant.toFixed(2)}` + "+" + `${newComplexNum.toFixed(2)}` + "i)";
		} else if (randOper == 1) {
			var newConstant = constant1 - constant2;
			var newComplexNum = complexNum1 - complexNum2;
			question = "Perform the " + operations[randOper] + " on the complex numbers (" + constant1 + "+" + complexNum1 + "i) and (" + constant2 + "+" + complexNum2 + "i)";
			answer = "The result of the " + operations[randOper] + " is (" + `${newConstant.toFixed(2)}` + "+" + `${newComplexNum.toFixed(2)}` + "i)";
		} else if (randOper == 2) {
			var newConstant = constant1 * constant2 - complexNum1 * complexNum2;
			var newComplexNum = constant1 * complexNum2 + complexNum1 * constant2;
			question = "Perform the " + operations[randOper] + " on the complex numbers (" + constant1 + "+" + complexNum1 + "i) and (" + constant2 + "+" + complexNum2 + "i)";
			answer = "The result of the " + operations[randOper] + " is (" + `${newConstant.toFixed(2)}` + "+" + `${newComplexNum.toFixed(2)}` + "i)";
		} else if (randOper == 3) {
			var newConstant = ((constant1 * constant2) + (complexNum1 * complexNum2)) / (constant2 * constant2 + complexNum2 * complexNum2);
			var newComplexNum = ((complexNum1 * constant2) - (constant1 * complexNum2)) / (constant2 * constant2 + complexNum2 * complexNum2);
			question = "Perform the " + operations[randOper] + " on the complex numbers (" + constant1 + "+" + complexNum1 + "i) and (" + constant2 + "+" + complexNum2 + "i)";
			answer = "The result of the " + operations[randOper] + " is (" + `${newConstant.toFixed(2)}` + "+" + `${newComplexNum.toFixed(2)}` + "i)";
		}
		return [question, answer];
	} else if (C_roots) {
		const constant1 = Math.ceil(Math.random() * 9);
		const constant2 = Math.ceil(Math.random() * 9);
		const complexNum1 = Math.ceil(Math.random() * 9);
		const complexNum2 = Math.ceil(Math.random() * 9);
		var question = "Given the function f(x) = (" + constant1 + " + " + complexNum1 + "x^2)(" + constant2 + " + " + complexNum2 + "x^2), find the roots";
		var answer = "x1 = " + `${(Math.sqrt(constant1/complexNum1)).toFixed(2)}` + "i, x2 = " + `${(Math.sqrt(constant2/complexNum2)).toFixed(2)}` + "i";
		return [question, answer];
	} else if (C_complex_functions) {
		const coefficient = Math.ceil(Math.random() * 9);
		const complexNum = Math.ceil(Math.random() * 9);
		const operations = ["+", "-", "*", "/"];
		const randOper = Math.floor(Math.random() * operations.length);
		var question;
		var answer;
		if(randOper == 0){
			question = "Given f(x) = z^2, z = " + coefficient + "x " + operations[randOper] + " " + complexNum + "yi, put it in terms of x and y";
			answer = "(" + (coefficient*coefficient) + "x^2 - " + (complexNum*complexNum) + "y^2) + " + (2*coefficient*complexNum) + "xyi";
		}else if(randOper == 1){
			question = "Given f(x) = z^2, z = " + coefficient + "x " + operations[randOper] + " " + complexNum + "yi, put it in terms of x and y";
			answer = "(" + (coefficient*coefficient) + "x^2 - " + (complexNum*complexNum) + "y^2) - " + (2*coefficient*complexNum) + "xyi";
		}else if(randOper == 2){
			question = "Given f(x) = z^2, z = " + coefficient + "x " + operations[randOper] + " " + complexNum + "yi, put it in terms of x and y";
			answer = "-(" + (coefficient*coefficient*complexNum*complexNum) + "x^2 * y^2)";
		}else if(randOper == 3){
			question = "Given f(x) = z^2, z = " + coefficient + "x " + operations[randOper] + " " + complexNum + "yi, put it in terms of x and y";
			answer = "-(" + (coefficient*coefficient) + "x^2 / " + (complexNum*complexNum) + "y^2)";
		}
		return [question, answer];
	}
	// Return the question and answer in an array
}
