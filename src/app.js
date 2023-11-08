function updateTime() {
  let viennaElement = document.querySelector("#vienna");
  let viennaDateElement = viennaElement.querySelector(".date");
  let viennaTimeElement = viennaElement.querySelector(".time");
  let viennaTime = moment().tz("Europe/Vienna");

  viennaDateElement.innerHTML = viennaTime.format("MMMM Do YYYY");
  viennaTimeElement.innerHTML = viennaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let seoulElement = document.querySelector("#seoul");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");
  let seoulTime = moment().tz("Asia/Seoul");

  seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
  seoulTimeElement.innerHTML = seoulTime.format("h:mm:ss [<small>]A[</small>]");

  let californiaElement = document.querySelector("#california");
  let californiaDateElement = californiaElement.querySelector(".date");
  let californiaTimeElement = californiaElement.querySelector(".time");
  let californiaTime = moment().tz("US/Pacific");

  californiaDateElement.innerHTML = californiaTime.format("MMMM Do YYYY");
  californiaTimeElement.innerHTML = californiaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
