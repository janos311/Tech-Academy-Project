// This function uses a while loop to display numbers from 1 to 10.
function Call_Loop() {
    var Digit = "";
    var X = 1;

    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }

    document.getElementById("Loop").innerHTML = Digit;
}

// This function displays the number of characters in a string.
function stringLength() {
    var text = "Hello World!";
    var length = text.length;
    document.getElementById("Length").innerHTML = length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;

// This function uses a for loop to display the instruments in an array.
function for_Loop() {
    Content = "";
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }

    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// This function displays an item from an array.
function array_Function() {
    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];

    document.getElementById("Array").innerHTML = Instruments[2];
}

// This function creates an object with const and updates its properties.
function constant_function() {
    const Musical_Instrument = {
        type: "guitar",
        brand: "Fender",
        color: "black"
    };

    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";

    document.getElementById("Constant").innerHTML =
        "The cost of the " + Musical_Instrument.type +
        " was " + Musical_Instrument.price +
        ". Its color is " + Musical_Instrument.color + ".";
}

// This function demonstrates the block scope of the let keyword.
function let_Function() {
    var X = 82;
    document.getElementById("Let").innerHTML = X;

    {
        let X = 33;
        document.getElementById("Let").innerHTML += "<br>" + X;
    }

    document.getElementById("Let").innerHTML += "<br>" + X;
}

// This function returns a value.
function return_Function() {
    var X = 10;
    return X;
}

let car = {
    make: "Dodge",
    model: "Viper",
    year: "2021",
    color: "red",
    description: function() {
        return "The car is a " + this.year + " " + this.color + " " + this.make + " " + this.model;
    }
};

document.getElementById("Car_Object").innerHTML = car.description();

// This function stops a loop using the break statement.
function break_Function() {
    var text = "";
    var i = 1;

    while (i < 11) {
        if (i === 6) {
            break;
        }
        text += i + "<br>";
        i++;
    }

    document.getElementById("Break_Result").innerHTML = text;
}

// This function skips an iteration using the continue statement.
function continue_Function() {
    var text = "";
    var i = 0;

    while (i < 10) {
        i++;

        if (i === 5) {
            continue;
        }

        text += i + "<br>";
    }

    document.getElementById("Continue_Result").innerHTML = text;
}