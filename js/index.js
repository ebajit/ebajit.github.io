function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

// Remove the color wipe element after the animation ends
document.addEventListener("DOMContentLoaded", function() {
    const colorWipe = document.getElementById("colorWipe");
    colorWipe.addEventListener("animationend", function() {
        colorWipe.parentNode.removeChild(colorWipe);
        document.body.style.overflow = 'auto'; // Restore overflow
    });
    // const title = document.getElementsByClassName('title');
});

// Temporarily disable scrolling
document.body.style.overflow = 'hidden';
