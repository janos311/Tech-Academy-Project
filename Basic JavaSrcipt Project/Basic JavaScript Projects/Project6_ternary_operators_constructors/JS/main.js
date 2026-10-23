// Check whether the rider is tall enough to ride.
function Ride_Function() {
    var Height, Can_ride;

    // Get the rider's height from the input field.
    Height = document.getElementById("Height").value;

    // Use the ternary operator to determine whether the rider can ride.
    Can_ride = (Height < 52)
        ? "You are too short"
        : "You are tall enough";

    // Display the result on the page.
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}


// Create a Vehicle constructor.
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// Create three vehicle objects.
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// Display information about Erik's vehicle.
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " +
        Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year + ".";
}

// Demonstrate the new keyword and the this keyword.
function NewVehicle(Make, Model, Year, Color) {
    this.Make = Make;
    this.Model = Model;
    this.Year = Year;
    this.Color = Color;
}

// Create a new vehicle object.
var myVehicle = new NewVehicle("Ford", "Mustang", 2024, "Blue");

// Display the new object's properties.
function myNewFunction() {
    document.getElementById("New_and_This").innerHTML =
        "My vehicle is a " + myVehicle.Color + " " +
        myVehicle.Year + " " + myVehicle.Make + " " +
        myVehicle.Model + ".";
}

// Reserved Keyword Challenge

// Attempt to use a reserved JavaScript keyword as a variable name.
// The word "class" is reserved, so it cannot be used as a variable name.
// Therefore, we use a valid variable name to display the word.
function Reserved_Function() {
    var reservedWord = "class";
    document.getElementById("Reserved").innerHTML = reservedWord;
}

// Create an object constructor function.
function Animal(Species, Color) {
    this.Species = Species;
    this.Color = Color;
}

// Create a new Animal object.
var myAnimal = new Animal("Dog", "Black");

// Display the object's properties.
function Animal_Function() {
    document.getElementById("Animal").innerHTML =
        "Species: " + myAnimal.Species +
        ", Color: " + myAnimal.Color;
}

// Nested Functions Assignment

function count_Function() {
    // Display the result returned by the nested function.
    document.getElementById("Nested_Function").innerHTML = Count();

    // Create a nested function.
    function Count() {
        var Starting_point = 9;

        // Increase the starting point by one.
        function Plus_one() {
            Starting_point += 1;
        }

        Plus_one();

        return Starting_point;
    }
}