function jakesNextMealtime(currentTimeString) {
  // converting the time string to get the current hour and minute
  let [currentHourStr, currentMinuteStr] = currentTimeString.split(":");
  let currentHour = parseInt(currentHourStr);
  let currentMinute = parseInt(currentMinuteStr.slice(0, -3));
  console.log(currentHour, currentMinute);

  // Converting the current hour to 24-hour 
  if (currentTimeString.endsWith("p.m.")) {
    currentHour += 12;
    console.log(currentHour);
    }
    
  let minutesLeftUntilNextMeal;

  // find the time until the next meal
  if (currentHour < 7 || (currentHour === 7 && currentMinute < 1)) {
    // If it's before 7:00 a.m., the next meal is breakfast
    minutesLeftUntilNextMeal = (7 - currentHour) * 60 - currentMinute;
  } else if (currentHour < 12 || (currentHour === 12 && currentMinute < 1)) {
    // If it's before 12:00 p.m., the next meal is lunch
    minutesLeftUntilNextMeal = (12 - currentHour) * 60 - currentMinute;
  } else if (currentHour < 19 || (currentHour === 19 && currentMinute < 1)) {
    // If it's before 7:00 p.m., the next meal is dinner
    minutesLeftUntilNextMeal = (19 - currentHour) * 60 - currentMinute;
  } else {
    // If it's after 7:00 p.m., the next meal is breakfast
    minutesLeftUntilNextMeal =
      (24 + 7 - currentHour) * 60 - currentMinute;
  }
  console.log(minutesLeftUntilNextMeal);
  // Return the time until the next meal 
  return [
    Math.floor(minutesLeftUntilNextMeal / 60),
    minutesLeftUntilNextMeal % 60,
  ];
}

console.log(jakesNextMealtime("12:12 p.m."));
