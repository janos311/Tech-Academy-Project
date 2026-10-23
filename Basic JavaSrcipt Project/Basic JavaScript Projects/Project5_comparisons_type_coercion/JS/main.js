// Create a string variable.
var word = "Hello";

// Display the data type of the variable using the typeof operator.
document.getElementById("TypeOf").innerHTML =
    "The data type of Hello is: " + typeof word;

// Demonstrate JavaScript type coercion.
document.getElementById("Coercion").innerHTML =
    '"10" + 5 = ' + ("10" + 5);

// Display NaN by dividing zero by zero.
function my_Function() {
    document.getElementById("Test1").innerHTML = 0 / 0;
}

// Check whether a string is not a number.
function my_Function_2() {
    document.getElementById("Test2").innerHTML = isNaN("This is a string");
}

// Check whether a numeric string is a number.
function my_Function_3() {
    document.getElementById("Test3").innerHTML = isNaN("007");
}

// Display positive Infinity using a very large number.
function infinity_Function() {
    document.getElementById("Infinity").innerHTML = 1.7976931348623157E+308 * 2;
}

// Display negative Infinity using a very large negative number.
function negative_Infinity_Function() {
    document.getElementById("NegativeInfinity").innerHTML = -1.7976931348623157E+308 * 2;
}

// Use Boolean logic to display true.
function boolean_True() {
    document.write(10 > 2);
}

// Use Boolean logic to display false.
function boolean_False() {
    document.write(10 < 2);
}

// Display the result of a math operation in the console.
console.log(2 + 2);

// Display false using Boolean logic in the console.
console.log(10 < 2);

// Compare equal values using the double equal operator.
console.log(10 == 10); // true

// Compare unequal values using the double equal operator.
console.log(3 == 11); // false

// 1. Same value and same data type: true.
console.log(10 === 10);

// 2. Different data type and different value: false.
console.log(10 === "11");

// 3. Different data type but same value: false.
console.log(10 === "10");

// 4. Same data type but different value: false.
console.log(10 === 11);

// AND operator: both conditions are true.
console.log(10 > 5 && 20 > 10);

// AND operator: one condition is false.
console.log(10 > 15 && 20 > 10);

// OR operator: the first condition is true.
console.log(10 > 5 || 20 < 10);

// OR operator: the second condition is true.
console.log(10 < 5 || 20 > 10);

// OR operator: both conditions are false.
console.log(10 < 5 || 20 < 10);

// Use the NOT operator to return false.
console.log(!(20 > 10));

// Use the NOT operator to return true.
console.log(!(5 > 10));

// Project5 Comparisons Type Coercion Assignment

// Variable with a Boolean data type.
var x = true;

// Display the data type of the variable.
console.log(typeof x);

// Expression combining a string and a number.
console.log('"10" + 10 = ' + ("10" + 10));

// Using the == operator.
console.log(5 == 5);

// Using the === operator.
var y = 1;
x = 1;
console.log(x === y);

// Using the > and && operators.
console.log(10 > 5 && 11 > 6);

// Using the < and || operators.
console.log(10 < 5 || 11 < 6);