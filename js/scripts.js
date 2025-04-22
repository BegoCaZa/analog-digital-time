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

const monthsOfTheYear = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

//FUNCIONES
const getClockDate = () => {
  const date = new Date();
  const day = daysOfTheWeek[date.getDay()];
  const month = monthsOfTheYear[date.getMonth()];
  const year = date.getFullYear();
  dayNumberElement.textContent = day;
  monthElement.textContent = month;
  yearElement.textContent = year;
};

const addZero= (number) => {
  return number < 10 ? `0${number}`: number;
}

const getClockTime = () => {
  const date = new Date(); //coge la hora cuando la llamo, asi que hay que repetirlo
  hoursElement.textContent = addZero(date.getHours()); //si es menor que 10, agrega cero con la otra funcion
  minutesElement.textContent = addZero(date.getMinutes());
};

setInterval(() => {
  getClockTime();
  getClockDate();
}, 1000);

//horas
//360° ÷ 12 horas = 30° por hora
//360° ÷ 60 = 6° por minuto
//6° ÷ 60 = 0.1° por segundo

