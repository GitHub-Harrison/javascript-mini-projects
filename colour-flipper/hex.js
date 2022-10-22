const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// #f15025
const btn = document.getElementById('btn');
const colour = document.querySelector('.colour');

btn.addEventListener('click', function() {
    let hexColour = '#';
    // for loop for building the colour hex code
    for(let i = 0; i<6; i++) {
        hexColour += hex[getRandomNumber()];
    }

    // this code displays the hex code of the background colour
    colour.textContent = hexColour;
    // this code changes the background colour 
    document.body.style.backgroundColor = hexColour;
});

// function to get random number which will 
// decide which object from array will be picked
function getRandomNumber() {
    // Math.floor will always round down to the nearest int so 0.9 = 0 and 1.5 = 1
    // We multiply by the length of the array to make sure we stay within
    // the array so the random numbers will stay between 0-15
    return Math.floor(Math.random() * hex.length)
}