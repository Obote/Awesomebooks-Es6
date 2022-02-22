import navSection from './modules/navigationbar.js';
import BookCollection from './modules/class.js';

navSection('list-nav');
const navList = ['list-nav', 'add-nav', 'contact-nav'];
navList.forEach((element) => {
  const display = document.getElementById(`${element}`);
  display.addEventListener('click', () => {
    navSection(element);
  });
});

const btnAdd = document.getElementById('btn-add-id');
const runClass = new BookCollection();
runClass.displayBooks();

btnAdd.addEventListener('click', () => {
  runClass.addBooks();
  runClass.displayBooks();
});

const dateTime = () => {
  // eslint-disable-next-line no-undef
  const luxonDate = luxon.DateTime.local();
  const dateFormat = `${luxonDate.monthLong} ${luxonDate.day}th ${luxonDate.year}, ${luxonDate.hour}:${luxonDate.minute}:${luxonDate.second} `;
  document.getElementById('timeDiv').innerHTML = `${dateFormat}`;
};

dateTime();
window.onload = function onload() {
  setInterval(dateTime, 100);
};