const globe= document.querySelector('#globe');
const button = document.querySelector('#fortune-button');
const message = document.querySelector('.message');

const messages = [
    "You will get good news today!",
    "A new friend awaits you in the future",
    "You will rediscover something you forgot brought you joy",
    "Today will be a great day",
    "Something good will happen today!",
];

button.addEventListener('click', () => {

const pick= Math.floor(Math.random() * messages.length);
message.textContent= messages[pick];
});
