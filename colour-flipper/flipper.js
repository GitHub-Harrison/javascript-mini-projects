const colours = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const colour = document.querySelector('.colour');

btn.addEventListener('click', function() {
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();

    // this code changes the colour of the background
    document.body.style.backgroundColor = colours[randomNumber];

    // this code displays the colour code to the webpage
    colour.textContent = colours[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colours.length);
}
