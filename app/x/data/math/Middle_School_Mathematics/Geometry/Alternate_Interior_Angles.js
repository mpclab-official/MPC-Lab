/*
Alternate Interior Angles

Description:
This function generates a problem related to alternate interior angles in geometry. It randomly generates an angle value within a specified range and constructs a question based on it. The function then provides the answer, emphasizing the equality of alternate interior angles in parallel lines.

Outputs:
- Array: An array containing the question and the answer.

Example Usage:
const result = AlternateInteriorAngles();
console.log(result);
// Output: ['In parallel lines, if the measure of one alternate interior angle is 100 degrees, what is the measure of the other alternate interior angle?', 'Alternate interior angles in parallel lines are equal, so the measure of the other alternate interior angle is also 100 degrees.']
// The question is regarding alternate interior angles, and the answer explains their equality in parallel lines.

*/

$X.math.Middle_School_Mathematics.Geometry.AlternateInteriorAngles = function () {
    var angle1 = Math.floor(Math.random() * 150) + 10; // Generating a random angle between 10 and 160 degrees
    var question = "In parallel lines, if the measure of one alternate interior angle is " + angle1 + " degrees, what is the measure of the other alternate interior angle?";
    var answer = "Alternate interior angles in parallel lines are equal, so the measure of the other alternate interior angle is also " + angle1 + " degrees.";
    return [question, answer];
};
