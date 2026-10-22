// Create a dictionary using JavaScript key-value pairs.
function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };

    // Delete the Sound key from the dictionary.
    delete Animal.Sound;

    // Display the deleted value.
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}