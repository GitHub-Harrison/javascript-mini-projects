// review data
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "girl-image.png",
        text: "I'm word everything something text paragraph mention confused but something like no yes maybe who no never potato tomato pot noodle",
    },
    {
        id: 2,
        name: "john smith",
        job: "software engineer",
        img: "guy-image.png",
        text: "I'm word everything something text paragraph mention confused but something like no yes maybe who no never potato tomato pot noodle",
    },
    {
        id: 3,
        name: "rosie jones",
        job: "ux designer",
        img: "rosie.png",
        text: "I'm word everything something text paragraph mention confused but something like no yes maybe who no never potato tomato pot noodle",
    },
    {
        id: 4,
        name: "spaceman",
        job: "man of space",
        img: "space.png",
        text: "I'm word everything something text paragraph mention confused but something like no yes maybe who no never potato tomato pot noodle",
    },
];

// NOT WORKING: TypeError:

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

// show random person
randomBtn.addEventListener("click", function () {
    console.log("hello");

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});