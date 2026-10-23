// Create a countdown timer.
function countdown() {

    // Get the number of seconds entered by the user.
    var seconds = document.getElementById("seconds").value;

    // Convert the input to a number.
    seconds = Number(seconds);

    // Count down one second at a time.
    function tick() {
        seconds = seconds - 1;

        document.getElementById("timer").innerHTML = seconds;

        var time = setTimeout(tick, 1000);

        // Stop the countdown when it reaches zero.
        if (seconds <= 0) {
            clearTimeout(time);
            document.getElementById("timer").innerHTML = "Time's up!";
            alert("Time's up!");
        }
    }

    tick();
}

// Slideshow functionality
var slideIndex = 1;

// Display the first slide.
showSlides(slideIndex);

// Move to the next or previous slide.
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Display the selected slide.
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Show the slides and update the navigation dots.
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (slides.length === 0) {
        return;
    }

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";

    if (dots.length >= slideIndex) {
        dots[slideIndex - 1].className += " active";
    }
}