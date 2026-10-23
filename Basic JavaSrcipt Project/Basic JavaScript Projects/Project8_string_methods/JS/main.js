// Create the full_Sentence function.
function full_Sentence() {

    // Create variables containing parts of a sentence.
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";

    // Connect the strings using the concat() method.
    var whole_sentence = part_1.concat(part_2, part_3, part_4);

    // Display the completed sentence in the HTML paragraph.
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// Create a sentence using the concat() method.
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";

    var whole_sentence = part_1.concat(part_2, part_3, part_4);

    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// Use the slice() method to extract part of a string.
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27, 33);

    document.getElementById("Slice").innerHTML = Section;
}

// Convert a string to uppercase.
function upperCase_Method() {
    var text = document.getElementById("Uppercase").innerHTML;
    document.getElementById("Uppercase").innerHTML = text.toUpperCase();
}

// Search for a word in a string.
function search_Method() {
    var text = document.getElementById("Search").innerHTML;
    var position = text.search("JavaScript");

    document.getElementById("Search_Result").innerHTML =
        "JavaScript was found at position: " + position;
}

// Convert a number to a string using toString().
function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

// Use toPrecision() to format a number to a specified length.
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

// Use toFixed() to format a number with two decimal places.
function fixed_Method() {
    var X = 10.5678;
    document.getElementById("Fixed").innerHTML = X.toFixed(2);
}

// Use valueOf() to return the primitive value of a Number object.
function valueOf_Method() {
    var X = new Number(100);
    document.getElementById("Value").innerHTML = X.valueOf();
}