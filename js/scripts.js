//elementos html
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');

const dayNameElement = document.getElementById('day-name');
const dayNumberElement = document.getElementById('day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const daysOfTheWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

//FUNCIONES
const getClockDate = () => {
  const date = new Date();
  const day = daysOfTheWeek[date.getDay()];
  dayNumberElement.textContent = day;
};

const getClockTime = () => {
  const date = new Date(); //coge la hora cuando la llamo, asi que hay que repetirlo
  hoursElement.textContent = date.getHours();
  minutesElement.textContent = date.getMinutes();
};

setInterval(() => {
  getClockTime();
  getClockDate();
}, 1000);
