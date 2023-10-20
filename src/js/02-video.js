// Імпорт бібліотеки
import Player from '@vimeo/player';

// Імпорт throttle
const throttle = require('lodash.throttle');

const CURRENT_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(timeplaying, 1000));

function timeplaying(event) {
  const currentTime = event.seconds;
  localStorage.setItem(CURRENT_TIME, JSON.stringify(currentTime));

  console.log(`Час перегляду ${currentTime} секунд`);
}

const timeLS = localStorage.getItem(CURRENT_TIME);
if (timeLS) {
  const savedTime = JSON.parse(timeLS);
  if (savedTime) {
    player.setCurrentTime(savedTime);
    console.log(`Ви закічили перегляд на ${Math.round(savedTime)} секунді`);
  }
} else {
  console.log(`Ви не переглядали це відео`);
}