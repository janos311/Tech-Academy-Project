function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";

    switch (Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
            break;

        case "Yellow":
            Color_Output = "Yellow" + Color_String;
            break;

        case "Green":
            Color_Output = "Green" + Color_String;
            break;

        case "Blue":
            Color_Output = "Blue" + Color_String;
            break;

        case "Pink":
            Color_Output = "Pink" + Color_String;
            break;

        case "Purple":
            Color_Output = "Purple" + Color_String;
            break;

        default:
            Color_Output = "Please enter a color exactly as written on the above list.";
    }

    document.getElementById("Output").innerHTML = Color_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

// Draw a blue rectangle on the canvas.
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

context.fillStyle = "blue";
context.fillRect(50, 50, 200, 100);

// Create a gradient color background on the canvas.
var gradient = context.createLinearGradient(0, 0, 300, 0);

gradient.addColorStop(0, "red");
gradient.addColorStop(1, "blue");

context.fillStyle = gradient;
context.fillRect(0, 180, 300, 50);