// Create a global variable outside the functions.
var X = 10;

// Display the global variable in the first function.
function Add_numbers_1() {
    document.getElementById("Global").innerHTML = 20 + X;
}

// Display the global variable in the second function.
function Add_numbers_2() {
    document.getElementById("Global").innerHTML += " and " + (X + 100);
}

// Create a function with a local variable.
function Local_variable() {
    var Y = 10;
    document.getElementById("Local").innerHTML = 20 + Y;
}

// Call the functions to display the results.
Add_numbers_1();
Add_numbers_2();
Local_variable();

// Intentionally use an undefined variable to demonstrate an error.
function Error_function() {
    var Z = 10;
    console.log(15 + Z);
}

// This function attempts to access a local variable outside its scope.
function Debug_function() {
    console.log(Z + 100);
}

// Execute the functions to demonstrate debugging.
Error_function();
Debug_function();

// Check the current local hour and display a greeting.
function get_Date() {
    // Get the current hour using the Date object.
    if (new Date().getHours() < 18) {
        // Display a greeting before 6:00 PM.
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

// Demonstrate an if statement.
function If_Statement() {
    if (10 > 5) {
        document.getElementById("If_Result").innerHTML =
            "10 is greater than 5!";
    }
}

// Check the user's age using an if and else statement.
function Age_Function() {
    // Get the age entered by the user.
    var Age = Number(document.getElementById("Age").value);
    var Vote;

    // Check whether the user is old enough to vote.
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    } else {
        Vote = "You are not old enough to vote!";
    }

    // Display the result on the page.
    document.getElementById("Age_Result").innerHTML = Vote;
}

// Determine the time of day using if, else if, and else.
function Time_function() {
    // Get the current hour from the computer's local time.
    var Time = new Date().getHours();
    var Reply;

    // Before noon.
    if (Time < 12) {
        Reply = "It is morning time!";
    }
    // Noon until before 6 PM.
    else if (Time < 18) {
        Reply = "It is afternoon.";
    }
    // 6 PM or later.
    else {
        Reply = "It is evening time.";
    }

    // Display the result on the webpage.
    document.getElementById("Time_of_day").innerHTML = Reply;
}