// Get elements
const currentDayOfTheWeek = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');

// Get current day of the week
const today = new Date();
const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const dayOfWeek = daysOfWeek[today.getDay()];
const utcTime = today.getTime();

// Update DOM elements
currentDayOfTheWeek.textContent = dayOfWeek;
currentUTCTime.textContent = utcTime;
