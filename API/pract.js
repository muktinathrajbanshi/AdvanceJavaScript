let dt = 1745851607;
const curDate = new Date(dt * 1000); // Convert seconds to milliseconds
console.log(curDate);
// // const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    // second: "numeric",
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
// // console.log(formatter);
  return formatter.format(curDate);
// console.log(formattedDate);

// let num = 3232.552;
// console.log(num.toFixed());
// console.log(Math.round(num));
