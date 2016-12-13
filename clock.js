setInterval(updateTime, 1000)

function updateTime () {
  var timenow = new Date
  var hours = timenow.getHours()
  var minutes = timenow.getMinutes()
  var seconds = timenow.getSeconds()
  $("#second").css("transform","rotate(" + secondRotation(seconds) + "deg)")
  $("#minute").css("transform","rotate(" + minuteRotation(minutes, seconds) + "deg)")
  $("#hour").css("transform","rotate(" + hourRotation(hours, minutes, seconds) + "deg)")
}

function secondRotation (seconds) {
  return 360 / 60 * seconds
}

function hourRotation (hours, minutes, seconds) {
  return 360 / 12 * hours + 360 / 12 / 60 * minutes + 360 / 12 / 60 / 60 * seconds
}

function minuteRotation (minutes, seconds) {
  return 360 / 60 *minutes + 360 / 60 / 60 * seconds
}

