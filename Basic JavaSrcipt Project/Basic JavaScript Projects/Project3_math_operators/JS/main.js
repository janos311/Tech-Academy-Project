// Create a function that performs multiple mathematical operations.
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;

    // Display the result of the calculation.
    document.getElementById("Math").innerHTML =
        "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}
// Create a function that uses the modulus operator.
function modulus_Operator() {
    var simple_Math = 25 % 6;

    // Display the remainder.
    document.getElementById("Math").innerHTML =
        "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

// Create a function for multiplication.
function multiplication() {
    var result = 6 * 8;
    document.getElementById("Math").innerHTML = "6 x 8 = " + result;
}

// Create a function for division.
function division() {
    var result = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + result;
}

// Create a function that uses the negation operator.
function negation_Operator() {
    var x = 10;

    // Display the negative value of x.
    document.getElementById("Math").innerHTML = -x;
}

// Create a function for the increment operator.
function increment_Function() {
    var X = 5;
    X++;
    document.getElementById("Math").innerHTML = "Increment: " + X;
}

// Create a function for the decrement operator.
function decrement_Function() {
    var Y = 5.25;
    Y--;
    document.getElementById("Math").innerHTML = "Decrement: " + Y;
}

// Create a function that generates a random number.
function random_Number() {
    var randomNumber = Math.random() * 100;

    // Display the random number.
    document.getElementById("Math").innerHTML =
        "Your random number is: " + randomNumber;
}

// Use the Math object to round a number.
function math_Object() {
    var number = Math.round(5.7);

    // Display the result in the HTML paragraph.
    document.getElementById("Math").innerHTML =
        "Math.round(5.7) = " + number;
}