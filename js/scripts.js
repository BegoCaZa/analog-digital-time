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


//horas
//360° ÷ 12 horas = 30° por hora
//

//minutos
//360° ÷ 60 = 6° por minuto
// 
// segundos
//360° ÷ 60 = 6° por segundo

const getAnalogClock = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hourDegrees = hours * 30;
  const minuteDegrees = minutes * 6;
  const secondDegrees = seconds * 6;

  document.documentElement.style.setProperty('--deg-rotation-hourse', `${hourDegrees}deg`);
  document.documentElement.style.setProperty('--deg-rotation-minutes', `${minuteDegrees}deg`);
  document.documentElement.style.setProperty('--deg-rotation-seconds', `${secondDegrees}deg`);
};

setInterval(() => {
  getClockTime();
  getClockDate();
  getAnalogClock();
}, 1000);