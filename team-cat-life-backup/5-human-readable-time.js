const padded = (num) => num < 10 ? `0${num}` : `${num}`


function humanReadable (seconds) {
  const secondsInMinute = 60
  const secondsInHour = 60 * secondsInMinute
  const hours = Math.floor(seconds / secondsInHour)
  seconds -= hours * secondsInHour
  const minutes = Math.floor(seconds / secondsInMinute)
  seconds -= minutes * secondsInMinute
  return `${padded(hours)}:${padded(minutes)}:${padded(seconds)}`
}