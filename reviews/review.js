// review data
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.thewowstyle.com%2Fwp-content%2Fuploads%2F2015%2F01%2Fnature-image.jpg&f=1&nofb=1&ipt=e8f1e48ce36fea8230ae3b2b58ff0a6fb2ffa56bcb1082fe797b40a04d3ce49a&ipo=images",
        text: 
        "I'm word everything something text paragraph mention confused but something like no yes maybe who no never potato tomato pot noodle",
    },
    {
        id: 2,
        name: "john smith",
        job: "software engineer",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F08%2FNature-wallpapers-Full-HD-backgroud.jpg&f=1&nofb=1&ipt=ae21724f641371cd82ff956c55bed64ede5412baf0144799c0caf78ae21adfab&ipo=images",
        text: 
        "I'm word everything something text paragraph mention confused but something like no yes maybe who no never potato tomato pot noodle",
    },
    {
        id: 3,
        name: "rosie jones",
        job: "ux designer",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallsdesk.com%2Fwp-content%2Fuploads%2F2017%2F01%2FNewfoundland-HD-Wallpaper.jpg&f=1&nofb=1&ipt=af9b94d4c1063360f1781223ca47088eea9c85ae5a5c7ab67e9efbcff12fb46e&ipo=images",
        text: 
        "I'm word everything something text paragraph mention confused but something like no yes maybe who no never potato tomato pot noodle",
    },
    {
        id: 4,
        name: "spaceman",
        job: "man of space",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kinja-img.com%2Fgawker-media%2Fimage%2Fupload%2Fs---Jp3oE95--%2Fc_fill%2Cfl_progressive%2Cg_center%2Ch_900%2Cq_80%2Cw_1600%2F199zpfi8dig2njpg.jpg&f=1&nofb=1&ipt=150bbf9b0bf2bd0702dba7cae2242d0a51e7bdd29ac1f783ebd479783f56c11d&ipo=images",
        text: 
        "I'm word everything something text paragraph mention confused but something like no yes maybe who no never potato tomato pot noodle",
    },
];

// select items
const img = document.getElementById('person-img')
const author = document.getElementByI('author')
const job = document.getElementByI('job')
const info = document.getElementByI('info')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

// set starting item
let currentItem = 0;

// load intial item
window.addEventListener("DOMContentLoaded", function () {
    showPerson()
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
nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length -1) {
        currentItem = 0;
    }
    showPerson();
});

// show prev person
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length -1;
    }
    showPerson();
});

// show random person
randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson();
});