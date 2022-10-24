// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// function to add to all buttons instead of doing one by one
btns.forEach(function (btn) {

    // allows for something the happen when the btn is clicked
    btn.addEventListener('click', function(e) {

        const styles = e.currentTarget.classList;

        // decreases the counter by 1 when the decrease button is clicked
        if (styles.contains('decrease')) {
            count--;
        }
        // increases the counter by 1 when the increase button is clicked
        else if (styles.contains('increase')) {
            count++;
        // resets the counter to 0
        } else {
            count = 0;
        }

        // if statment to change the counter colour to green when higher than 0
        if (count > 0) {
            value.style.color = 'green';
        }
        // if statement to change the counter colour to red when less than 0
        if (count < 0) {
            value.style.color = 'red';
        }
        // if statement to change the counter colour to black when counter = 0
        if (count == 0) {
            value.style.color = '#222'
        }
        // updates the counter
        value.textContent = count;
    })
})