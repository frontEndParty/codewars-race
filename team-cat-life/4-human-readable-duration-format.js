const plural = (num) => num > 1 ? 's' : ''

function formatDuration (seconds) {
  const secondsInMinute = 60
  const secondsInHour = 60 * secondsInMinute
  const secondsInDay = 24 * secondsInHour
  const secondsInYear = 365 * secondsInDay
  const years = Math.floor(seconds / secondsInYear)
  seconds -= years * secondsInYear
  const days = Math.floor(seconds / secondsInDay)
  seconds -= days * secondsInDay
  const hours = Math.floor(seconds / secondsInHour)
  seconds -= hours * secondsInHour
  const minutes = Math.floor(seconds / secondsInMinute)
  seconds -= minutes * secondsInMinute
  const arr = []
  if (years) arr.push(`${years} year${plural(years)}`)
  if (days) arr.push(`${days} day${plural(days)}`)
  if (hours) arr.push(`${hours} hour${plural(hours)}`)
  if (minutes) arr.push(`${minutes} minute${plural(minutes)}`)
  if (seconds) arr.push(`${seconds} second${plural(seconds)}`)
  if (!arr.length) return 'now'
  return arr.reduce((final, str, i) => {
    if (i === arr.length - 1) return final + ' and ' + str
    return final + ', ' + str
  })
}